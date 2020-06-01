<template>
  <b-container
    class="relationFriendContainer section"
    v-if="relatedUnits && relatedUnits.length > 0"
  >
    <SectionTitle title="Commonly picked together" />

    <RelatedUnitsSection :relatedUnits="relatedUnits" />
  </b-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import SectionTitle from '@/components/UnitDetailCard/SectionTitle.vue';
import RelatedUnitsSection from '@/components/UnitDetailCard/RelationGrid.vue';

export default {
  components: {
    SectionTitle,
    RelatedUnitsSection,
  },
  props: {
    unitInfo: Object,
  },
  computed: {
    ...mapState(['URLS', 'DEVELOPMENT_MODE', 'DUMMY_RESPONSE']),
  },
  asyncComputed: {
    async relatedUnits() {
      return await this.fetchRelatedUnit();
    },
  },
  methods: {
    async fetchRelatedUnit() {
      if (this.DEVELOPMENT_MODE) {
        return this.DUMMY_RESPONSE.predictFriend['result'];
      }

      try {
        let url = `${this.URLS.PREDICT_FRIEND_API}${this.unitInfo.com2us_id}`;
        let response = await fetch(url, { method: 'GET' });
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
.section {
  background-color: #4f4f4f;
  margin: 20px 0px;
  padding: 0;
}

.section-info {
  margin: 0px;
  padding: 0px;
}
</style>
