<template>
  <div class="UnitPickTileContainer">
    <div
      :class="isSelected ? 'selected' : 'not-selected'"
      class="unitPickTile mb-2"
      @click="toggleIsSelected()"
    >
      <FadeImage :src="unit.image_filename" :alt="unit.name" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import FadeImage from '@/components/Transition/FadeImage.vue';

export default {
  components: {
    FadeImage,
  },
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
  padding: 3px;
}

.unitPickTile >>> img {
  max-width: 100% !important;
  border-radius: 10%;
  cursor: pointer;
}

.not-selected:hover {
  filter: brightness(40%);
}

.selected {
  filter: brightness(40%);
}
</style>
