<template>
  <b-container
    class="relationCounterContainer section"
    v-if="relatedUnits && relatedUnits.length > 0"
  >
    <b-row class="section-title">
      <b-col>
        Top counter-pick
      </b-col>
    </b-row>
    <RelatedUnitsSection :relatedUnits="relatedUnits" />
  </b-container>
</template>

<script>
import RelatedUnitsSection from './RelationGrid.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  components: {
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
        return this.DUMMY_RESPONSE.predictCounter['result'];
      }

      try {
        let url = `${this.URLS.PREDICT_COUNTER_API}${this.unitInfo.com2us_id}`;
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

.section-title {
  background-color: #3f3f3f;
  font-weight: 700;
  font-size: 1.1em;
  margin: 0px;
  padding: 3px 0px;
}

.section-info {
  margin: 0px;
  padding: 0px;
}
</style>
