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

        <b-row
          class="updates"
          v-for="(update, i) of updates"
          :key="i"
        >
          <b-col class="col-lg-2 col-md-3 col-sm-4 col-4">
            {{ update.version }}
          </b-col>
          <b-col class="col-lg-4 col-md-3 col-sm-8 col-8">
            {{ update.date }}
          </b-col>
          <b-col
            class="col-lg-6 col-md-6 col-sm-8 offset-md-0 offset-4"
            >{{ update.description }}
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
      title: 'Updates',
      updates: [
        {
          version: 'v0.9.0',
          description: 'Beta version release',
          date: '01 June 2020',
        },
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

.updates {
  margin: 1em 0;
  align-items: center;
}
</style>
