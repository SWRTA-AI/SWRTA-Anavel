<template>
  <div class="home">
    <div>
      <b-card-text>
        {{ showPickNames }}
      </b-card-text>
    </div>
    <b-container fluid>
      <b-col class="col-3">
        <UnitBox :units="randomUnits" />
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
      let units = [];
      for (let i = 0; i < 25; i++) {
        let idx = Math.floor(Math.random() * this.BESTIARY.length);
        units.push(this.BESTIARY[idx]);
      }
      return units;
    },
    showPickNames() {
      return this.getPicks.map(x => (x == null ? x : x.name));
    },
  },
};
</script>
