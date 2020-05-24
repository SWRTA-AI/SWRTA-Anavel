<template>
  <div class="home">
    <div>
      <b-card-text>
        {{ showPickNames }}
      </b-card-text>
    </div>
    <b-container fluid>
      <b-row>
        <b-col class="col-3">
          <UnitBox />
        </b-col>
        <b-col class="col-3 offset-1 mt-5">
          <UnitPickCard
            v-for="i of FIRST_PICK_IDX"
            :key="i"
            :pickIndex="i"
          />
        </b-col>
        <b-col class="col-3 offset-1 mt-5">
          <UnitPickCard
            v-for="i of SECOND_PICK_IDX"
            :key="i"
            :pickIndex="i"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import UnitBox from '@/components/UnitBox.vue';
import UnitPickCard from '@/components/UnitPickCard.vue';
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    UnitBox,
    UnitPickCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getPicks']),
    ...mapState(['BESTIARY', 'FIRST_PICK_IDX', 'SECOND_PICK_IDX']),

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
    this.pickRandomUnits(4);
  },
};
</script>

<style scoped></style>
