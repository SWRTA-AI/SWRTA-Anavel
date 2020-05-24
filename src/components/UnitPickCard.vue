<template>
  <div class="unitPickCardContainer">
    <b-row>
      <b-col
        class="col-4 px-0 py-0"
        :class="[imagePosition == 'left' ? '' : 'order-1']"
      >
        <b-img
          v-if="unit != null"
          :src="IMAGE_URL_PREFIX + unit.image_filename"
          :alt="unit.name"
          class="unitPickTile mb-2"
          @click="unpickSelf"
        />
      </b-col>
      <b-col class="col-8">
        {{ unit.name }}
        ({{ unit.element }})
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
    index: Number,
  },
  data() {
    return {
      placeholder: {
        name: 'Slime',
        image_filename: 'unit_icon_0010_1_0.png',
        element: 'Fire',
      },
    };
  },
  computed: {
    ...mapState(['IMAGE_URL_PREFIX', 'FIRST_PICK_IDX', 'gl_picks']),
    unit() {
      let pickedUnit = this.gl_picks[this.index];
      return pickedUnit ? pickedUnit : this.placeholder;
    },
    imagePosition() {
      return this.FIRST_PICK_IDX.includes(this.index)
        ? 'right'
        : 'left';
    },
  },
  methods: {
    ...mapActions(['unpickUnit']),
    unpickSelf() {
      this.unpickUnit(this.index);
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
</style>
