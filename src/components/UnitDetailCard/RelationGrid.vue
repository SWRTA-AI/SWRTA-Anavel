<template>
  <b-container>
    <b-row class="section-info">
      <b-col
        v-for="(unit, i) of relatedUnits"
        :key="i"
        class="unitPictureContainer"
      >
        <b-img
          :src="unit.image_filename"
          @click="setActiveUnit(unit)"
        ></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    relatedUnits: Array,
  },
  methods: {
    ...mapActions(['setActiveUnit']),
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  border-radius: 15%;
}

img:hover {
  filter: brightness(40%);
  cursor: pointer;
}

.unitPictureContainer {
  padding: 0px;
}
</style>
