<template>
  <div class="unitBoxGridContainer" v-if="units != null">
    <transition-group
      mode="out-in"
      appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
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
import Velocity from 'velocity-animate';

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
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(
          el,
          { opacity: 1, height: '100%' },
          { complete: done },
        );
      }, delay);
    },
    leave: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    },
  },
};
</script>
