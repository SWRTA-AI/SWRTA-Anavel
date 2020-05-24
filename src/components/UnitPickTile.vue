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
    isSelectedComputed() {
      return (
        this.gl_picks.findIndex(x => {
          return x && x.com2us_id == this.unit.com2us_id;
        }) != -1
      );
    },
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

    refreshState() {
      let idx = this.gl_picks.findIndex(x => {
        return x && x.com2us_id == this.unit.com2us_id;
      });
      this.isSelected = idx != -1;
      this.pickIdx = idx != -1 ? idx : null;
    },
  },
  mounted() {
    this.refreshState();
  },
  updated() {
    this.refreshState();
  },
};
</script>

<style scoped>
.unitPickTile {
  max-width: 100% !important;
  border-radius: 8px;
  padding: 3px;
}
.selected {
  filter: brightness(40%);
}
</style>
