<template>
  <div class="unitPickCardContainer">
    <b-row v-if="unit">
      <b-col
        class="col-4 px-0 py-0"
        :class="[imagePosition == 'left' ? '' : 'order-1']"
      >
        <b-img
          :src="IMAGE_URL_PREFIX + unit.image_filename"
          :alt="unit.name"
          class="unitPickTile mb-3"
          @click="unpickSelf"
        />
      </b-col>
      <b-col class="col-8">
        <div :hidden="unit.isPlaceholder">
          <div v-if="unit">
            {{ unit.name }}
            ({{ unit.element }})
          </div>
          <div v-if="detailedInfo">
            {{ detailedInfo.name }}
            ({{ detailedInfo.element }})
          </div>
        </div>
      </b-col>
    </b-row>

    <!-- Placeholder -->
    <b-row v-if="unit == null">
      <Placeholder :pickIndex="pickIndex" />
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import UnitPickTile from '@/components/UnitPickTile.vue';
import Placeholder from '@/components/UnitPickCardPlaceholder.vue';

export default {
  components: {
    UnitPickTile,
    Placeholder,
  },
  props: {
    pickIndex: Number,
  },
  data() {
    return {
      PLACEHOLDER_IMG: 'unit_icon_0010_1_0.png',

      detailedInfo: null,
    };
  },
  computed: {
    ...mapState(['IMAGE_URL_PREFIX', 'FIRST_PICK_IDX', 'gl_picks']),

    unit() {
      return this.gl_picks[this.pickIndex];
    },

    unitDetailInfoUrl() {
      return this.unit
        ? `https://swarfarm.com/api/bestiary/${this.unit.pk}?format=json`
        : null;
    },

    imagePosition() {
      return this.FIRST_PICK_IDX.includes(this.pickIndex)
        ? 'right'
        : 'left';
    },
  },

  methods: {
    ...mapActions(['unpickUnit']),

    unpickSelf() {
      this.unpickUnit(this.pickIndex);
      this.detailedInfo = null;
    },

    fetchUnitDetailInfo() {
      if (this.unitDetailInfoUrl) {
        fetch(this.unitDetailInfoUrl, {
          method: 'GET',
        })
          .then(response => response.json())
          .then(data => (this.detailedInfo = data));
      }
    },
  },

  watch: {
    unitDetailInfoUrl() {
      this.fetchUnitDetailInfo();
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #2a2a2a !important;
}
.card-body {
  padding: 5px 0px;
}
.placeholder img {
  opacity: 0.2;
}
</style>
