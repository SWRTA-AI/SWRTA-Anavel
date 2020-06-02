<template>
  <b-container fluid class="introductionContainer">
    <b-row
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <b-col>
        <b-jumbotron
          bg-variant="transparent"
          :fluid="true"
          :header="title"
          :lead="lead"
        >
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row
      class="mb-5"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <b-col class="col-xl-4 col-lg-3 col-sm-2"> </b-col>
      <b-col class="col-xl-4 col-lg-6 col-sm-8 col-12 intro">
        <div v-html="intro"></div>
      </b-col>
      <b-col class="col-xl-4 col-lg-3 col-sm-2"> </b-col>
    </b-row>
    <b-row
      class="mb-5"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <b-col class="col-xl-4 col-lg-3 col-sm-2"> </b-col>
      <b-col class="col-xl-4 col-lg-6 col-sm-8 col-12">
        <div v-html="description"></div>
      </b-col>
      <b-col class="col-xl-4 col-lg-3 col-sm-2"> </b-col>
    </b-row>
    <b-row
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <b-col>
        <b-button variant="primary" to="/pickban">
          Getting Started
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      title: 'SWRTA',
      lead: 'Welcome to Summoners War RTA pick-ban AI',
      intro:
        'Have you ever been in the position, \
        where you have to choose either letting <b>Miho</b> \
        or <b>Antares</b> through and wreck \
        your <b>Diana Verde</b> team?',
      description:
        '<b>SWRTA-AI</b> is here to help fellow summoners\
        to have more "fun" in RTA by leveraging data;\
        especially during <b>pick & ban phase.</b>\
        We carefully process and analyze thousands \
        of best matches to ensure best quality suggestion.',
    };
  },
};
</script>

<style scoped>
.introductionContainer {
  margin-bottom: 10vh;
}
.intro {
  font-size: 1.1em;
}
</style>
