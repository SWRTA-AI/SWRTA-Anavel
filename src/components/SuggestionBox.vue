<template>
  <div class="suggestionBoxContainer">
    <b-container>
      <b-row>
        Suggested Picks
      </b-row>
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
import { mapGetters } from 'vuex';

export default {
  components: {
    UnitPickTile,
  },
  data() {
    return {
      MAX_ROW: 5,
      MAX_COL: 5,

      units: [],
      searchQuery: '',
      showUnAwakened: false,
    };
  },
  computed: {
    ...mapGetters(['getAwakenBestiary']),

    unitMatrix() {
      let [...arr] = this.units;
      let result = [];
      while (arr.length && result.length < this.MAX_ROW) {
        result.push(arr.splice(0, this.MAX_COL));
      }
      return result;
    },

    randomUnits() {
      let i = 0;
      let result = [];
      while (i < this.MAX_ROW * this.MAX_COL) {
        let idx = Math.floor(
          Math.random() * this.getAwakenBestiary.length,
        );
        let unit = this.getAwakenBestiary[idx];
        if (result.indexOf(unit) < 0) {
          result.push(unit);
          i++;
        }
      }
      return result;
    },
  },
  methods: {
    updateUnitBox() {
      if (this.searchQuery && this.searchQuery != '') {
        this.units = this.$store.getters.searchBestiary(
          this.searchQuery,
          this.showUnAwakened,
        );
      }
    },
    resetUnitBox() {
      this.units = this.randomUnits;
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
  watch: {
    showUnAwakened() {
      this.updateUnitBox();
    },
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
