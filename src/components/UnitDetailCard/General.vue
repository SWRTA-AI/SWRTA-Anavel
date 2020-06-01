<template>
  <b-container class="generalInfoContainer section">
    <b-row>
      <b-col class="col-lg-3 unitPicture text-center">
        <FadeImage :src="unitPicUrl" />
      </b-col>
      <b-col class="col-lg-7 align-self-center">
        <b-row>
          <b-col class="col-lg-3 unitElement text-right">
            <b-img :src="elementPicUrl"></b-img>
          </b-col>
          <b-col class="col-lg-9 unitName text-left">
            {{ unitName }}
          </b-col>
        </b-row>
        <b-row class="unitStar">
          <b-col class="text-center">
            <b-img
              :src="starsPicUrl"
              v-for="i of unitGrade"
              :key="i"
            ></b-img>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="unitTierContainer col-lg-2">
        <div class="unitTier" :class="`tier-${unitTier}`">
          {{ unitTier }}
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import FadeImage from '@/components/Transition/FadeImage.vue';

export default {
  components: {
    FadeImage,
  },
  props: {
    unitInfo: Object,
  },
  computed: {
    ...mapState(['URLS']),

    unitName() {
      return this.unitInfo.name;
    },
    unitPicUrl() {
      return `${this.URLS.IMAGE_PREFIX}monsters/${this.unitInfo.image_filename}`;
    },
    elementPicUrl() {
      return `${
        this.URLS.IMAGE_PREFIX
      }elements/${this.unitInfo.element.toLowerCase()}.png`;
    },

    unitGrade() {
      return this.unitInfo.base_stars;
    },

    unitTier() {
      return this.$store.getters.getUnitTier(this.unitInfo.com2us_id);
    },

    starsPicUrl() {
      let category = this.unitInfo.is_awakened
        ? 'awakened'
        : 'unawakened';
      return `${this.URLS.IMAGE_PREFIX}stars/star-${category}.png`;
    },
  },
};
</script>

<style scoped>
.section {
  background-color: #4f4f4f;
  margin: 20px 0px;
}

.section-info {
  margin: 0px;
  padding: 5px 0px;
}

.generalInfoContainer {
  background-color: #2a2a2a;
}

.unitPicture {
  padding: 0;
  text-align: left;
}

.unitPicture >>> img {
  max-width: 100%;
  border-radius: 14px;
}

.unitName {
  font-size: 1.2vw;
  padding-left: 5px;
  text-align: left;
}

.unitElement {
  align-self: center;
  padding-right: 3px;
  padding-left: 0px;
  text-align: right;
}

.unitElement img {
  max-width: 1.5em;
}

.unitStar {
  text-align: justify;
}

.unitStar img {
  max-width: 1em;
}

.unitTierContainer {
  padding: 0px;
  align-self: center;
  text-align: center;
}

.unitTier {
  max-width: 100%;
  font-size: 2vw;
  font-weight: 700;
}
.tier-SSS {
  color: rgb(255, 224, 88);
  font-size: 1.5vw;
}
.tier-SS {
  color: rgb(255, 224, 88);
  font-size: 1.7vw;
}
.tier-S {
  color: rgb(255, 224, 88);
}
</style>
