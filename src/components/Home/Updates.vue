<template>
  <b-container fluid>
    <b-row class="mt-5">
      <b-col class="col-xl-4 col-lg-3 col-sm-2"> </b-col>
      <b-col
        class="sectionContainer col-xl-4 col-lg-6 col-sm-8 col-12"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <b-row class="title">
          <b-col>{{ title }}</b-col>
        </b-row>

        <b-row
          class="updateRow"
          v-for="(update, i) of updates"
          :key="i"
        >
          <b-col
            class="col-lg-2 col-md-3 col-4 text-md-center text-left"
          >
            {{ update.version }}
          </b-col>
          <b-col
            class="col-lg-4 col-md-3 col-8 text-md-center text-right"
          >
            {{ update.date }}
          </b-col>
          <b-col class="col-md-6 col-sm-8 offset-md-0 text-justify"
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
          version: 'v0.9.1',
          description: 'Retrained model with 11500 data',
          date: '02 June 2020',
        },
        {
          version: 'v0.9.0',
          description:
            'Beta version release for mobile and web browsers',
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

.updateRow {
  margin: 1em 0;
  align-items: center;
}

@media screen and (max-width: 991px) {
  .sectionContainer {
    padding: 4vw 5vw;
  }
  .updateRow {
    margin: 2em 0;
  }
}
</style>
