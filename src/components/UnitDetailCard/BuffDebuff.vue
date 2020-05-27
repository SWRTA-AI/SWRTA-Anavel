<template>
  <b-container
    class="buffDebuffContainer section"
    v-if="buffDebuff.length > 0"
  >
    <b-row class="section-title">
      <b-col>
        Buff / Debuff
      </b-col>
    </b-row>
    <b-row class="section-info">
      <b-col>
        <b-img
          class="mx-1"
          :src="url"
          v-for="(url, i) of buffDebuff"
          :key="i"
        ></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    unitInfo: Object,
  },
  computed: {
    ...mapState(['IMAGE_URL_PREFIX']),

    buffDebuff() {
      let result = [];
      for (let skill of this.unitInfo.skills) {
        for (let effect of skill.skill_effect) {
          if (effect.icon_filename.length > 0) {
            let url = `${this.IMAGE_URL_PREFIX}buffs/${effect.icon_filename}`;
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

.section-title {
  background-color: #3f3f3f;
  font-weight: 700;
  font-size: 1.1em;
  margin: 0px;
  padding: 3px 0px;
}

.section-info {
  margin: 0px;
}

.buffDebuffContainer img {
  max-width: 2.8em;
  border-radius: 5px;
}
</style>
