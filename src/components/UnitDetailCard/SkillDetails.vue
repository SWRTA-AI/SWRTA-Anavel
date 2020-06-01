<template>
  <b-container class="skillContainer py-1 px-0">
    <SectionTitle :title="skill.name" class="title" />

    <b-row class="description section-info text-justify">
      <b-col> {{ skill.description }} {{ cooldown }}</b-col>
    </b-row>

    <b-row class="upgrades section-info">
      <b-col>
        <div
          class="text-left"
          v-for="(upgrade, i) of upgrades"
          :key="i"
        >
          {{ `Lv ${i + 2}. ` }}{{ upgrade }}
        </div>
      </b-col>
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
    skill: Object,
  },
  computed: {
    upgrades() {
      let upgradeText = this.skill.level_progress_description;
      return upgradeText.length == 0 ? null : upgradeText.split('\n');
    },
    cooldown() {
      let cd = this.skill.cooltime;
      return cd ? `(Reusable in ${cd} turns)` : null;
    },
  },
};
</script>

<style scoped>
.title {
  margin-top: 0.3vw;
}
.description {
  flex-direction: column;
}
.skillContainer {
  background-color: #4f4f4f;
}

.section-info {
  margin: 7px auto;
}
</style>
