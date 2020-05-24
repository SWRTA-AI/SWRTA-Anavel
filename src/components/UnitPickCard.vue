<template>
  <div class="unitPickCardContainer">
    <b-row>
      <b-col
        class="col-4 px-0 py-0"
        :class="[isImgOnLeft ? '' : 'order-1']"
      >
        <UnitPickTile v-if="unit != null" :unit="unit" />
      </b-col>
      <b-col class="col-8">
        Some name description and stuff here Some quick example text
        to build on the card and make up the bulk of the card's
        content.
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import UnitPickTile from '@/components/UnitPickTile.vue';

export default {
  props: {
    unit: Object,
    isImgOnLeft: Boolean,
  },
  components: {
    UnitPickTile,
  },
  computed: {
    ...mapState(['IMAGE_URL_PREFIX']),
  },
  methods: {},
};
</script>

<style scoped>
.card {
  background-color: #2a2a2a !important;
}
.card-body {
  padding: 5px 0px;
}
</style>
