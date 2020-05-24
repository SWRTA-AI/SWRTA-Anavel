<template>
  <div class="unitBoxContainer">
    <b-container>
      <b-row>Unit Box</b-row>
      <b-row
        ><b-form-input
          v-model="searchQuery"
          placeholder="Search"
          class="unitBoxSearchBar"
          @keyup="updateUnitBox"
        ></b-form-input
      ></b-row>
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
    initUnits: Array,
  },
  components: {
    UnitPickTile,
  },
  data() {
    return {
      MAX_ROW: 5,
      MAX_COL: 5,

      units: [],
      searchQuery: '',
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
  methods: {
    updateUnitBox() {
      if (this.searchQuery && this.searchQuery != '') {
        this.units = this.$store.getters.searchBestiary(
          this.searchQuery,
        );
      }
    },
    resetUnitBox() {
      this.units = this.initUnits;
    },
  },
  mounted() {
    this.resetUnitBox();
  },
  updated() {
    if (this.searchQuery.length < 1) {
      this.resetUnitBox();
    }
  },
};
</script>

<style scoped>
.unitBoxContainer {
  background-color: #2a2a2a;
  padding: 10px;
}
.unitBoxSearchBar {
  margin: 5px 3px 15px 3px;
  border: 0;
  background-color: #bbbbbb;
}
</style>
