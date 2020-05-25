<template>
  <div class="unitBoxGridContainer">
    <b-row v-for="(row, i) of unitMatrix" :key="i">
      <b-col v-for="(unit, j) of row" :key="j" class="px-0">
        <UnitPickTile :unit="unit" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import UnitPickTile from '@/components/UnitPickTile.vue';

export default {
  components: {
    UnitPickTile,
  },
  props: {
    units: Array,
    row: Number,
    col: Number,
  },
  computed: {
    unitMatrix() {
      let [...arr] = this.units;
      let result = [];
      while (arr.length && result.length < this.row) {
        result.push(arr.splice(0, this.col));
      }
      return result;
    },
  },
};
</script>
