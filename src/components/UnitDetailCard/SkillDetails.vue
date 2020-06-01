<template>
  <b-container class="skillContainer py-1 px-0">
    <b-row class="title section-info">
      <b-col>
        {{ skill.name }}
      </b-col>
    </b-row>

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
export default {
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
  background-color: #3f3f3f;
  padding: 3px 0px;
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

.title {
  font-weight: 700;
  font-size: 0.9vw;
}
</style>
