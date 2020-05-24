<template>
  <div class="home">
    <div>
      <b-card-text>
        {{ showPickNames }}
      </b-card-text>
    </div>
    <b-container fluid>
      <b-col class="col-3">
        <UnitBox :initUnits="randomUnits" />
      </b-col>
      <b-col class="col-9"> </b-col>
    </b-container>
    <b-container> </b-container>
  </div>
</template>

<script>
import UnitBox from '@/components/UnitBox.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    UnitBox,
  },
  methods: {},
  computed: {
    ...mapGetters(['getPicks']),
    ...mapState(['BESTIARY']),
    randomUnits() {
      let i = 0;
      let units = [];
      while (i < 25) {
        let idx = Math.floor(Math.random() * this.BESTIARY.length);
        let unit = this.BESTIARY[idx];
        if (units.indexOf(unit) < 0) {
          units.push(unit);
          i++;
        }
      }
      return units;
    },
    showPickNames() {
      return this.getPicks.map(x => (x == null ? x : x.name));
    },
  },
};
</script>

<style scoped></style>
