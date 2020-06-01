<template>
  <b-container
    class="leaderskillContainer section"
    v-if="leaderskill"
  >
    <b-row class="section-title">
      <b-col>
        Leads (RTA)
      </b-col>
    </b-row>
    <b-row class="section-info">
      <b-col> {{ leaderskill }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  props: {
    unitInfo: Object,
  },
  computed: {
    leaderskill() {
      let skill = this.unitInfo.leader_skill;
      if (!skill) {
        return;
      }
      let usableArea = ['Arena', 'General', 'Element'];
      if (!usableArea.includes(skill.area)) {
        return;
      }
      let element = skill.element ? `(${skill.element})` : '';
      let attribute = {
        'Attack Speed': 'Spd',
        'Attack Power': 'Atk',
        Defense: 'Def',
        HP: 'Hp',
        'Critical Rate': 'CRate',
        Resistance: 'Res',
        Accuracy: 'Acc',
      }[skill.attribute];
      return `${element} ${attribute} ${skill.amount}%`;
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
