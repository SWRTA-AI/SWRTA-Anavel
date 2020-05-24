<template>
  <div>
    <b-row>Title</b-row>
    <b-row>Search Bar</b-row>
    <b-container>
      <b-row v-for="(row, i) of unitMatrix" :key="i">
        <b-col v-for="(unit, j) of row" :key="j" class="px-0">
          <UnitPickTile :unit="unit" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import UnitPickTile from '@/components/UnitPickTile.vue';

export default {
  props: {
    units: Array,
  },
  components: {
    UnitPickTile,
  },
  data() {
    return {
      MAX_ROW: 5,
      MAX_COL: 5,
      //   units: [],
    };
  },
  computed: {
    unitMatrix() {
      let [...arr] = this.units;
      let result = [];
      while (arr.length && result.length < this.MAX_ROW) {
        result.push(arr.splice(0, this.MAX_COL));
      }
      return result;
    },
  },
  methods: {},
};
</script>
