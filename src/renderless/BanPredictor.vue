<template> </template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState(['BAN_API_URL']),
    firstTeamIds() {
      let team = this.$store.getters.getFirstPickTeam;
      return team.map(x => x.com2us_id);
    },
    secondTeamIds() {
      let team = this.$store.getters.getSecondPickTeam;
      return team.map(x => x.com2us_id);
    },
  },
  methods: {
    ...mapActions(['setBanSuggestion']),

    async suggestBans() {
      await this.suggestFirstPickBan();
      await this.suggestSecondPickBan();
    },

    async suggestFirstPickBan() {
      let suggestion = await this.fetchBanPrediction({
        type: 'id',
        team: this.firstTeamIds,
        opponent: this.secondTeamIds,
      });

      this.setBanSuggestion({
        suggestion,
        isFirstPick: true,
      });
    },

    async suggestSecondPickBan() {
      let suggestion = await this.fetchBanPrediction({
        type: 'id',
        team: this.secondTeamIds,
        opponent: this.firstTeamIds,
      });

      this.setBanSuggestion({
        suggestion,
        isFirstPick: false,
      });
    },

    async fetchBanPrediction(payload) {
      try {
        let response = await fetch(this.BAN_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        let content = await response.json();
        return content['result'];
      } catch (error) {
        return [];
      }
    },
  },
  mounted() {
    this.suggestBans();
  },
};
</script>
