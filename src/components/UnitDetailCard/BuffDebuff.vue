<template>
  <b-container
    class="buffDebuffContainer section"
    v-if="buffDebuff.length > 0"
  >
    <SectionTitle title="Buff / Debuff" />
    <b-row class="section-info" align-h="center">
      <div v-for="(url, i) of buffDebuff" :key="i" class="buff-image">
        <FadeImage :src="url" />
      </div>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import SectionTitle from '@/components/UnitDetailCard/SectionTitle.vue';
import FadeImage from '@/components/Transition/FadeImage.vue';

export default {
  components: {
    SectionTitle,
    FadeImage,
  },
  props: {
    unitInfo: Object,
  },
  computed: {
    ...mapState(['URLS']),

    buffDebuff() {
      let result = [];
      for (let skill of this.unitInfo.skills) {
        for (let effect of skill.skill_effect) {
          if (effect.icon_filename.length > 0) {
            let url = `${this.URLS.IMAGE_PREFIX}buffs/${effect.icon_filename}`;
            result.push(url);
          }
        }
      }
      return result.sort();
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
}

.buff-image {
  margin: 0 0.2em;
}

.buff-image >>> img {
  max-width: 2.5em;
  border-radius: 5px;
}
</style>
