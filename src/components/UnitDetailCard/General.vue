<template>
  <b-container class="generalInfoContainer section">
    <b-row class="generalInfoContainer section">
      <b-col class="col-4 unitPicture">
        <b-img :src="unitPicUrl"></b-img>
      </b-col>
      <b-col class="col-8 align-self-center">
        <b-row>
          <b-col class="col-2 unitElement">
            <b-img :src="elementPicUrl"></b-img>
          </b-col>
          <b-col class="col-9 unitName">
            {{ unitName }}
          </b-col>
        </b-row>
        <b-row class="unitStarContainer">
          <b-col class="col-7">
            <b-img
              :src="starsPicUrl"
              v-for="i of unitGrade"
              :key="i"
            ></b-img>
          </b-col>
        </b-row>
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

    unitName() {
      return this.unitInfo.name;
    },
    unitPicUrl() {
      return `${this.IMAGE_URL_PREFIX}monsters/${this.unitInfo.image_filename}`;
    },
    elementPicUrl() {
      return `${
        this.IMAGE_URL_PREFIX
      }elements/${this.unitInfo.element.toLowerCase()}.png`;
    },

    unitGrade() {
      return this.unitInfo.base_stars;
    },

    starsPicUrl() {
      let category = this.unitInfo.is_awakened
        ? 'awakened'
        : 'unawakened';
      return `${this.IMAGE_URL_PREFIX}stars/star-${category}.png`;
    },
  },
};
</script>

<style scoped>
.section {
  background-color: #4f4f4f;
  margin: 20px 0px;
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
  padding: 5px 0px;
}

.generalInfoContainer {
  background-color: #2a2a2a;
}

.unitPicture {
  padding: 0;
  text-align: left;
}

.unitPicture img {
  max-width: 100%;
  border-radius: 14px;
}

.unitName {
  font-size: 1.8em;
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

.unitStarContainer img {
  max-width: 1em;
}
</style>
