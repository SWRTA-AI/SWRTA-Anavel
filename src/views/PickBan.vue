<template>
  <div class="PickBan">
    <transition name="fade" mode="in-out">
      <div v-show="isMounted">
        <b-container fluid>
          <b-row class="mt-4">
            <b-col class="col-lg-5 mx-xl-4 col-12">
              <PickBanFrame />
            </b-col>
            <b-col
              class="col-xl-3 col-lg-4 col-12 ml-xl-3 order-lg-first"
            >
              <SuggestionBox />
              <div class="my-3"></div>
              <UnitBox />
            </b-col>
            <b-col class="col-lg-3 order-md-3">
              <UnitDetailCard />
            </b-col>
          </b-row>
        </b-container>
      </div>
    </transition>
  </div>
</template>

<script>
import UnitBox from '@/components/UnitBox.vue';
import SuggestionBox from '@/components/SuggestionBox.vue';
import PickBanFrame from '@/components/PickBanFrame.vue';
import UnitDetailCard from '@/components/UnitDetailCard.vue';
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'PickBan',
  components: {
    UnitBox,
    SuggestionBox,
    PickBanFrame,
    UnitDetailCard,
  },
  data() {
    return {
      isMounted: false,
    };
  },
  computed: {
    ...mapGetters(['getPicks', 'getAwakenBestiary']),

    showPickNames() {
      return this.getPicks.map(x => (x == null ? x : x.name));
    },
  },
  methods: {
    ...mapActions(['pickUnit']),
    pickRandomUnits(n) {
      let i = 0;
      let maxCount = this.getAwakenBestiary.length;
      let usedIdx = [];
      while (i < n) {
        let idx = Math.floor(Math.random() * maxCount);
        if (usedIdx.indexOf(idx) < 0) {
          usedIdx.push(idx);
          let unit = this.getAwakenBestiary[idx];
          this.pickUnit({ unit, idx: i });
          i++;
        }
      }
    },
  },
  mounted() {
    this.pickRandomUnits(5);
    this.isMounted = true;
  },
};
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 2s ease-out;
}
.fade-enter {
  opacity: 0;
}
</style>
