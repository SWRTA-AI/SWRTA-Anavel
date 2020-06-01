<template>
  <b-container fluid>
    <b-row class="mt-5">
      <b-col class="col-xl-4 col-lg-3 col-sm-2"> </b-col>
      <b-col
        class="sectionContainer col-xl-4 col-lg-6 col-sm-8 col-12"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <b-row class="title">
          <b-col>{{ title }}</b-col>
        </b-row>

        <b-row
          class="disclaimer"
          v-for="(disclaimer, i) of disclaimers"
          :key="i"
        >
          <b-col>* {{ disclaimer }} *</b-col>
        </b-row>
      </b-col>
      <b-col class="col-xl-4 col-lg-3 col-sm-2"> </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      title: 'Disclaimer',
      disclaimers: [
        'None of those images used belongs to me',
        'Information related to unit gathered from SWARFARM',
        'RTA matches data gathered using SWProxy with custom plugins',
      ],
    };
  },
  computed: {},
};
</script>

<style scoped>
.sectionContainer {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5%;
  padding: 1vw;
}

.title {
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 1em;
}
.disclaimer {
  font-size: 0.8em;
  margin-bottom: 1em;
}
</style>
