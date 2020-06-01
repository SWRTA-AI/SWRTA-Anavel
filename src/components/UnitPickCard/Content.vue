<template>
  <b-container class="unitPickCardPlaceholderContainer">
    <b-row class="align-items-center mb-3">
      <b-col
        class="col-4 px-0 py-0"
        :class="[layoutType == 1 ? 'order-1' : '']"
      >
        <b-img
          :src="unit.image_filename"
          :alt="unit.name"
          class="unitPickTile"
          :class="glowType"
          @click="unpickSelf"
        />
      </b-col>
      <b-col
        class="unitName col-8 px-3"
        :class="[layoutType == 1 ? 'text-right' : 'text-left']"
        :hidden="unit.isPlaceholder"
        v-if="unit"
      >
        {{ unit.name }}
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import UnitPickTile from '@/components/UnitPickTile.vue';

export default {
  components: {
    UnitPickTile,
  },
  props: {
    pickIndex: Number,
    layoutType: Number,
    unit: Object,
  },
  computed: {
    isBanCandidate() {
      let { idx: c1 } = this.$store.getters.getBestFirstPickBan;
      let { idx: c2 } = this.$store.getters.getBestSecondPickBan;
      return this.pickIndex == c1 || this.pickIndex == c2;
    },
    isSubBanCandidate() {
      let { idx2: c1 } = this.$store.getters.getBestFirstPickBan;
      let { idx2: c2 } = this.$store.getters.getBestSecondPickBan;
      return this.pickIndex == c1 || this.pickIndex == c2;
    },
    glowType() {
      if (this.isBanCandidate) {
        return 'glowing glowing-1';
      } else if (this.isSubBanCandidate) {
        return 'glowing glowing-2';
      } else {
        return '';
      }
    },
  },
  methods: {
    ...mapActions(['unpickUnit']),

    unpickSelf() {
      this.unpickUnit(this.pickIndex);
      this.detailedInfo = null;
    },
  },
};
</script>

<style scoped>
img {
  border-radius: 10px;
  max-width: 100%;
}
img:hover {
  filter: brightness(40%);
}
.unitPickCardPlaceholderContainer {
  cursor: pointer;
}

.unitName {
  font-size: 1.1vw;
}

@keyframes glowing-1 {
  0% {
    background-color: #ffcac8;
    box-shadow: 0 0 1vw #ffcac8;
  }
  50% {
    background-color: #ff625d;
    box-shadow: 0 0 2vw #ff625d;
  }
  100% {
    background-color: #ffcac8;
    box-shadow: 0 0 1vw #ffcac8;
  }
}

@keyframes glowing-2 {
  0% {
    background-color: #f0e6bc;
    box-shadow: 0 0 1vw #f0e6bc;
  }
  50% {
    background-color: #e0970f;
    box-shadow: 0 0 2vw #e0970f;
  }
  100% {
    background-color: #f0e6bc;
    box-shadow: 0 0 1vw #f0e6bc;
  }
}

.glowing {
  -webkit-border-radius: 15px;
  border-radius: 10%;
  border: none;
  cursor: pointer;
  display: inline-block;
  padding: 5%;
}

.glowing-1 {
  animation: glowing-1 2000ms infinite;
}

.glowing-2 {
  animation: glowing-2 2000ms infinite;
}
</style>
