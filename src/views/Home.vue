<template>
  <div class="home">
    <b-container fluid>
      <b-row class="mt-4">
        <b-col class="col-3 ml-3">
          <SuggestionBox />
          <div class="my-3"></div>
          <UnitBox />
        </b-col>
        <b-col class="col-5 mx-5">
          <PickBanFrame />
        </b-col>
        <b-col class="col-3">
          <UnitDetailCard />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import UnitBox from '@/components/UnitBox.vue';
import SuggestionBox from '@/components/SuggestionBox.vue';
import PickBanFrame from '@/components/PickBanFrame.vue';
import UnitDetailCard from '@/components/UnitDetailCard.vue';
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    UnitBox,
    SuggestionBox,
    PickBanFrame,
    UnitDetailCard,
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
  },
};
</script>
