<template>
  <b-container fluid>
    <b-row class="mt-5">
      <b-col class="col-xl-4 col-lg-3 col-sm-2"> </b-col>
      <b-col
        class="sectionContainer col-xl-4 col-lg-6 col-sm-8 col-12"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="800"
      >
        <b-row class="title">
          <b-col>{{ title }}</b-col>
        </b-row>

        <b-row class="specialThanks">
          <b-col v-for="(name, i) of specialThanksNotButton" :key="i">
            - {{ name }}
          </b-col>
        </b-row>

        <b-row class="specialThanks">
          <b-col
            class="col-6"
            v-for="(entity, i) of specialThanks"
            :key="i"
          >
            <b-button variant="outline-primary" :href="entity.url">
              {{ entity.name }}
            </b-button>
          </b-col>
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
      title: 'Special thanks to',
      specialThanks: [
        {
          name: 'SWARFARM',
          url: 'https://swarfarm.com/',
        },
        {
          name: 'SWProxy',
          url: 'https://github.com/kakaroto/SWProxy/releases',
        },
      ],
      specialThanksNotButton: ['Fellow summoners'],
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

.specialThanks {
  margin: 1em 0;
  align-items: center;
}

.btn {
  max-width: 100%;
}
</style>
