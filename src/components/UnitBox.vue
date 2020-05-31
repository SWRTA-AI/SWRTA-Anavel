<template>
  <div class="unitBoxContainer">
    <transition name="fade" mode="in-out">
      <div v-show="isMounted">
        <b-container>
          <b-row>
            <b-form-input
              v-model="searchQuery"
              placeholder="Type to search"
              class="unitBoxSearchBar"
              @keyup="updateUnitBox"
            ></b-form-input>
          </b-row>
          <UnitBoxGrid :row="MAX_ROW" :col="MAX_COL" :units="units" />
          <b-row>
            <b-form-checkbox
              v-model="showUnAwakened"
              name="showUnAwakened"
              switch
            >
              Show unawakened
            </b-form-checkbox>
          </b-row>
        </b-container>
      </div>
    </transition>
  </div>
</template>

<script>
import UnitBoxGrid from '@/components/UnitBoxGrid.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    UnitBoxGrid,
  },
  data() {
    return {
      MAX_ROW: 5,
      MAX_COL: 5,
      isMounted: false,

      units: [],
      searchQuery: '',
      showUnAwakened: false,
    };
  },
  computed: {
    ...mapGetters(['getCurrentPickIndex']),
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
      this.units = this.$store.getters.getRandomUnits(
        this.MAX_ROW * this.MAX_COL,
      );
    },
  },
  mounted() {
    this.resetUnitBox();
    this.isMounted = true;
  },
  watch: {
    showUnAwakened() {
      this.updateUnitBox();
    },
    searchQuery() {
      if (this.searchQuery.length < 1) {
        this.resetUnitBox();
      }
    },
    getCurrentPickIndex() {
      this.searchQuery = '';
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

.fade-enter-active {
  transition: opacity 2s ease-out;
}
.fade-enter {
  opacity: 0;
}
</style>
