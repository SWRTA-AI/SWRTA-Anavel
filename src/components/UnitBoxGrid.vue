<template>
  <div class="unitBoxGridContainer" v-if="units != null">
    <transition-group name="list-complete" mode="out-in">
      <b-row v-for="(row, i) of unitMatrix" :key="i">
        <b-col v-for="(unit, j) of row" :key="j" class="px-0">
          <UnitPickTile :unit="unit" />
        </b-col>
      </b-row>
    </transition-group>
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

<style scoped>
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
