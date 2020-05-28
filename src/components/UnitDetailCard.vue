<template>
  <b-container class="UnitDetailCardContainer" v-if="detailedInfo">
    <GeneralSection :unitInfo="detailedInfo" />
    <RelationFriendSection :unitInfo="detailedInfo" />
    <RelationCounterSection :unitInfo="detailedInfo" />
    <TraitsSection :unitInfo="detailedInfo" />
    <BuffDebuffSection :unitInfo="detailedInfo" />
    <LeadSection :unitInfo="detailedInfo" />
    <SkillsSection :unitInfo="detailedInfo" />
  </b-container>
</template>

<script>
import GeneralSection from '@/components/UnitDetailCard/General.vue';
import RelationFriendSection from '@/components/UnitDetailCard/RelationFriend.vue';
import RelationCounterSection from '@/components/UnitDetailCard/RelationCounter.vue';
import TraitsSection from '@/components/UnitDetailCard/Traits.vue';
import BuffDebuffSection from '@/components/UnitDetailCard/BuffDebuff.vue';
import LeadSection from '@/components/UnitDetailCard/LeaderSkill.vue';
import SkillsSection from '@/components/UnitDetailCard/Skills.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  components: {
    GeneralSection,
    RelationFriendSection,
    RelationCounterSection,
    TraitsSection,
    BuffDebuffSection,
    LeadSection,
    SkillsSection,
  },
  computed: {
    ...mapGetters(['getLastPickedUnit']),
  },
  asyncComputed: {
    async detailedInfo() {
      if (this.getLastPickedUnit) {
        let url = `https://swarfarm.com/api/bestiary/${this.getLastPickedUnit.pk}?format=json`;
        return await this.fetchUnitDetailInfo(url);
      }
    },
  },
  methods: {
    async fetchUnitDetailInfo(url) {
      try {
        let result = await fetch(url, { method: 'GET' });
        return result.json();
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },
  watch: {
    detailedInfo() {
      this.shownSkill = 0;
    },
  },
};
</script>

<style scoped>
.UnitDetailCardContainer {
  background-color: #2a2a2a;
  padding: 0.25rem 1rem 0.25rem 1rem;
}
</style>
