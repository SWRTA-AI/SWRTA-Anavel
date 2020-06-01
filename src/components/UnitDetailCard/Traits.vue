<template>
  <b-container class="traitsContainer section" v-if="traits">
    <SectionTitle title="Traits" />
    <b-row class="section-info">
      <b-col>{{ traits }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
import SectionTitle from '@/components/UnitDetailCard/SectionTitle.vue';
export default {
  components: {
    SectionTitle,
  },
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

.section-info {
  margin: 0px;
  padding: 5px 0px;
}
</style>
