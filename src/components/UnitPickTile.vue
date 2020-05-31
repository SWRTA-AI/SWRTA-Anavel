<template>
  <div class="UnitPickTileContainer">
    <div :class="isSelected ? 'selected' : 'not-selected'">
      <transition name="fade" mode="out-in" appear>
        <b-img
          :src="unit.image_filename"
          :key="unit.image_filename"
          :alt="unit.name"
          class="unitPickTile mb-2"
          @click="toggleIsSelected()"
        />
      </transition>
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
      pickIdx: null,
    };
  },
  computed: {
    ...mapState(['gl_picks']),
    ...mapGetters(['getCurrentPickIndex', 'isAbleToPick']),
    isSelected() {
      return (
        this.gl_picks.findIndex(x => {
          return x && x.com2us_id == this.unit.com2us_id;
        }) != -1
      );
    },
  },
  methods: {
    ...mapActions(['pickUnit', 'unpickUnit']),

    toggleIsSelected() {
      if (!this.isSelected && this.isAbleToPick) {
        this.pick();
      } else if (this.isSelected) {
        this.unpick();
      }
    },

    pick() {
      this.pickIdx = this.getCurrentPickIndex;
      this.pickUnit({ unit: this.unit, idx: this.pickIdx });
    },

    unpick() {
      this.unpickUnit(this.pickIdx);
      this.pickIdx = null;
    },

    refreshState() {
      let idx = this.gl_picks.findIndex(x => {
        return x && x.com2us_id == this.unit.com2us_id;
      });
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
  cursor: pointer;
}

.not-selected:hover {
  filter: brightness(40%);
}

.selected {
  filter: brightness(40%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
