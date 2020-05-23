<template>
  <div class="home">
    <div>
      <b-card-text>
        {{ getPicks }}
      </b-card-text>
    </div>
    <UnitPickTile
      v-for="unit of randomUnits"
      :key="unit.com2us_id"
      :unit="unit"
    />
  </div>
</template>

<script>
import UnitPickTile from '@/components/UnitPickTile.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    UnitPickTile,
  },
  methods: {},
  computed: {
    ...mapGetters(['getPicks']),
    ...mapState(['BESTIARY']),
    randomUnits() {
      let units = [];
      for (let i = 0; i < 15; i++) {
        let idx = Math.floor(Math.random() * this.BESTIARY.length);
        units.push(this.BESTIARY[idx]);
      }
      return units;
    },
  },
};
</script>
