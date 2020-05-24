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
import PickBanFrame from '@/components/PickBanFrame.vue';
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    UnitBox,
    PickBanFrame,
  },
  computed: {
    ...mapGetters(['getPicks']),
    ...mapState(['BESTIARY']),

    showPickNames() {
      return this.getPicks.map(x => (x == null ? x : x.name));
    },
  },
  methods: {
    ...mapActions(['pickUnit']),
    pickRandomUnits(n) {
      let i = 0;
      let units = [];
      while (i < 25) {
        let idx = Math.floor(Math.random() * this.BESTIARY.length);
        let unit = this.BESTIARY[idx];
        if (units.indexOf(unit) < 0) {
          units.push(unit);
          if (i < n) {
            this.pickUnit({ unit, idx: i });
          }
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
3 3
