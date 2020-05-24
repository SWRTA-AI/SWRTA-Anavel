<template>
  <b-container class="unitPickCardPlaceholderContainer">
    <b-row>
      <b-col
        class="col-4 px-0 py-0"
        :class="[imagePosition == 'left' ? '' : 'order-1']"
      >
        <b-img
          :src="IMAGE_URL_PREFIX + PLACEHOLDER_IMG"
          alt="placeholder"
          class="mb-3"
        />
      </b-col>
      <b-col class="text-area col-8">
        Pick a unit
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  props: {
    pickIndex: Number,
  },
  data() {
    return {
      PLACEHOLDER_IMG: 'unit_icon_0010_1_0.png',
    };
  },
  computed: {
    ...mapState(['IMAGE_URL_PREFIX', 'FIRST_PICK_IDX', 'gl_picks']),
    imagePosition() {
      return this.FIRST_PICK_IDX.includes(this.pickIndex)
        ? 'right'
        : 'left';
    },
  },
};
</script>

<style scoped>
img {
  opacity: 0.2;
}
.text-area {
  align-self: center;
  font-size: 1.3em;
  opacity: 0.7;
}
</style>
