<template>
  <div class="home">
    <div>
      <b-card-text>
        {{ showPickNames }}
      </b-card-text>
    </div>
    <b-container fluid>
      <b-row>
        <b-col class="col-3 ml-5 mt-5">
          <SuggestionBox />
          <div class="my-5"></div>
          <UnitBox />
        </b-col>
        <b-col class="col-7 mt-5">
          <PickBanFrame />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import UnitBox from '@/components/UnitBox.vue';
import SuggestionBox from '@/components/SuggestionBox.vue';
import PickBanFrame from '@/components/PickBanFrame.vue';
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    UnitBox,
    SuggestionBox,
    PickBanFrame,
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
