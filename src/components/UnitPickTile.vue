<template>
  <div class="UnitPickTileContainer">
    <div :class="isSelected ? 'selected' : 'not-selected'">
      <b-img
        :src="IMAGE_URL_PREFIX + unit.image_filename"
        :alt="unit.name"
        class="unitPickTile mb-2"
        @click="toggleIsSelected()"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
  props: {
    unit: Object,
  },
  data() {
    return {
      isSelected: false,
      pickIdx: null,
    };
  },
  computed: {
    ...mapState(['IMAGE_URL_PREFIX', 'gl_picks']),
  },
  methods: {
    ...mapGetters(['getCurrentPickIndex', 'isAbleToPick']),
    ...mapActions(['pickUnit', 'unpickUnit']),

    toggleIsSelected() {
      if (!this.isSelected && this.isAbleToPick()) {
        this.pick();
      } else if (this.isSelected) {
        this.unpick();
      }
    },

    pick() {
      this.pickIdx = this.getCurrentPickIndex();
      this.pickUnit({ unit: this.unit, idx: this.pickIdx });
      this.isSelected = true;
    },

    unpick() {
      this.unpickUnit(this.pickIdx);
      this.pickIdx = null;
      this.isSelected = false;
    },

    init() {
      let idx = this.gl_picks.findIndex(
        x => x && x.com2us_id == this.unit.com2us_id,
      );
      this.isSelected = idx != -1;
      this.pickIdx = idx != -1 ? idx : null;
    },
  },

  mounted() {
    this.init();
  },
};
</script>

<style scoped>
.unitPickTile {
  max-width: 5rem !important;
}
.selected {
  filter: brightness(30%);
}
</style>
