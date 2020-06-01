<template>
  <div>
    <b-row class="section-title">
      <b-col>
        {{ title }}
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
.section-title {
  background-color: #3f3f3f;
  font-weight: 700;
  font-size: 0.9vw;
  margin: 0px;
  padding: 0.15vw 0px;
}
</style>
