<template>
  <b-container
    class="leaderskillContainer section"
    v-if="leaderskill"
  >
    <SectionTitle title="Leads (RTA)" />

    <b-row class="section-info">
      <b-col> {{ leaderskill }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import SectionTitle from '@/components/UnitDetailCard/SectionTitle.vue';

export default {
  components: {
    SectionTitle,
  },
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

.section-info {
  margin: 0px;
  padding: 5px 0px;
}
</style>
