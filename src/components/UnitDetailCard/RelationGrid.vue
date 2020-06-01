<template>
  <b-container>
    <b-row class="section-info">
      <b-col
        v-for="(unit, i) of relatedUnits"
        :key="i"
        class="unitPictureContainer"
      >
        <div class="unitImage" @click="setActiveUnit(unit)">
          <FadeImage :src="unit.image_filename" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';
import FadeImage from '@/components/Transition/FadeImage.vue';

export default {
  components: {
    FadeImage,
  },
  props: {
    relatedUnits: Array,
  },
  methods: {
    ...mapActions(['setActiveUnit']),
  },
};
</script>

<style scoped>
.unitImage >>> img {
  max-width: 100%;
  border-radius: 15%;
}

.unitImage:hover {
  filter: brightness(40%);
  cursor: pointer;
}

.unitPictureContainer {
  padding: 0.1vw;
}
</style>
