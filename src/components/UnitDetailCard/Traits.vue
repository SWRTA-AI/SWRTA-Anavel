<template>
  <b-container class="traitsContainer section" v-if="traits">
    <b-row class="section-title">
      <b-col>
        Traits
      </b-col>
    </b-row>
    <b-row class="section-info">
      <b-col>{{ traits }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    unitInfo: Object,
  },
  computed: {
    traits() {
      let effects = new Set();
      for (let skill of this.unitInfo.skills) {
        for (let effect of skill.skill_effect) {
          effects.add(effect.name);
        }
      }
      return new Array(...effects).sort().join(', ');
    },
  },
};
</script>

<style scoped>
.section {
  background-color: #4f4f4f;
  margin: 20px 0px;
  padding: 0;
}

.section-title {
  background-color: #3f3f3f;
  font-weight: 700;
  font-size: 0.9vw;
  margin: 0px;
  padding: 3px 0px;
}

.section-info {
  margin: 0px;
  padding: 5px 0px;
}
</style>
