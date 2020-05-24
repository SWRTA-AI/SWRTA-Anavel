<template>
  <div class="unitPickCardContainer">
    <b-row>
      <b-col
        class="col-4 px-0 py-0"
        :class="[imagePosition == 'left' ? '' : 'order-1']"
      >
        <b-img
          v-if="unit != null && !unit.isPlaceholder"
          :src="IMAGE_URL_PREFIX + unit.image_filename"
          :alt="unit.name"
          class="unitPickTile mb-2"
          @click="unpickSelf"
        />

        <b-img
          v-if="unit.isPlaceholder"
          :src="IMAGE_URL_PREFIX + placeholder.image_filename"
          alt="placeholder"
          class="placeholder mb-2"
        />
      </b-col>

      <b-col class="col-8">
        <div :hidden="unit.isPlaceholder">
          <div v-if="unit != null">
            {{ unit.name }}
            ({{ unit.element }})
          </div>
          <div v-if="detailedInfo != null">
            {{ detailedInfo.name }}
            ({{ detailedInfo.element }})
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import UnitPickTile from '@/components/UnitPickTile.vue';

export default {
  components: {
    UnitPickTile,
  },
  props: {
    pickIndex: Number,
  },
  data() {
    return {
      placeholder: {
        name: 'Slime',
        image_filename: 'unit_icon_0010_1_0.png',
        element: 'Fire',
        isPlaceholder: true,
      },
      detailedInfo: null,
    };
  },
  computed: {
    ...mapState(['IMAGE_URL_PREFIX', 'FIRST_PICK_IDX', 'gl_picks']),
    unit() {
      let pickedUnit = this.gl_picks[this.pickIndex];
      return pickedUnit ? pickedUnit : this.placeholder;
    },
    unitDetailInfoUrl() {
      return this.unit.pk
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
.placeholder {
  opacity: 0.2;
}
</style>
