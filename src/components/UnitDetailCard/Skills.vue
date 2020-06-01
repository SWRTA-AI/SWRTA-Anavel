<template>
  <b-container class="skillsContainer section">
    <b-row class="section-title">
      <b-col>
        Skills
      </b-col>
    </b-row>

    <b-row class="section-info">
      <b-col v-for="(url, i) of skillsPicUrls" :key="i">
        <div
          :class="shownSkill == i ? 'active' : 'inactive'"
          @click="showSkillInfo(i)"
        >
          <FadeImage :src="url" />
        </div>
      </b-col>
    </b-row>

    <SkillDetail
      :hidden="i != shownSkill"
      v-for="(skill, i) of unitInfo.skills"
      :key="i"
      :skill="skill"
    />
  </b-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import SkillDetail from '@/components/UnitDetailCard/SkillDetails.vue';
import FadeImage from '@/components/Transition/FadeImage.vue';

export default {
  components: {
    SkillDetail,
    FadeImage,
  },
  props: {
    unitInfo: Object,
  },
  data() {
    return {
      shownSkill: 0,
    };
  },
  computed: {
    ...mapState(['URLS']),

    skillsPicUrls() {
      let skillsPicUrls = [];
      for (let skill of this.unitInfo.skills) {
        let url = `${this.URLS.IMAGE_PREFIX}skills/${skill.icon_filename}`;
        skillsPicUrls.push(url);
      }
      return skillsPicUrls;
    },
  },
  methods: {
    showSkillInfo(i) {
      this.shownSkill = i;
    },
  },
  watch: {
    unitInfo() {
      this.shownSkill = 0;
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
  font-size: 1.1em;
  margin: 0px;
  padding: 3px 0px;
}

.section-info {
  margin: 0px;
  padding: 15px 0px 5px 0px;
}

.skillsContainer >>> img {
  max-width: 75%;
  border-radius: 14px;
  cursor: pointer;
}

.skillsContainer .inactive >>> img {
  filter: brightness(40%);
}

.skillsContainer .inactive >>> img:hover {
  filter: brightness(80%);
}
</style>
