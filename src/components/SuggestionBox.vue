<template>
  <div class="suggestionBoxContainer">
    <b-container>
      <b-row>
        <b-col class="my-2"><h5>Suggested Picks</h5></b-col>
      </b-row>
      <UnitBoxGrid
        :row="MAX_ROW"
        :col="MAX_COL"
        :units="suggestedUnits"
      />
    </b-container>
  </div>
</template>

<script>
import UnitBoxGrid from '@/components/UnitBoxGrid.vue';
import { mapGetters, mapState } from 'vuex';

export default {
  components: {
    UnitBoxGrid,
  },
  data() {
    return {
      MAX_ROW: 1,
      MAX_COL: 5,

      units: [],
      searchQuery: '',
      showUnAwakened: false,
    };
  },
  computed: {
    ...mapState(['SUGGESTION_API_URL']),
    ...mapGetters(['getPickIds']),
  },
  asyncComputed: {
    async suggestedUnits() {
      return await this.fetchSuggestion({
        type: 'id',
        input: this.getPickIds,
        k: this.MAX_ROW * this.MAX_COL,
      });
    },
  },
  methods: {
    async fetchSuggestion(payload) {
      try {
        let response = await fetch(this.SUGGESTION_API_URL, {
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
};
</script>

<style scoped>
.suggestionBoxContainer {
  background-color: #2a2a2a;
  padding: 10px;
}
</style>
