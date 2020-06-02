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
        <b-row class="counter">
          <b-col>
            <animated-number
              :number="count"
              delay="2000"
            ></animated-number>
          </b-col>
        </b-row>
        <b-row class="title">
          <b-col>{{ title }}</b-col>
        </b-row>
        <b-row class="subtitle">
          <b-col>{{ subtitle }}</b-col>
        </b-row>
      </b-col>

      <b-col class="col-xl-4 col-lg-3 col-sm-2"> </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AnimatedNumber from '@/components/Transition/AnimatedNumber.vue';

export default {
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      title: 'matches studied',
      count: 11500,
    };
  },
  computed: {
    subtitle() {
      return `Equals to ${this.durationDay} of battles!`;
    },
    timeCount() {
      return Math.floor(this.count * 3.27);
    },
    durationDay() {
      var d = Math.floor(this.timeCount / 1440);
      var h = Math.floor((this.timeCount - d * 1440) / 60);
      var m = Math.round(this.timeCount % 60);
      return d + ' days, ' + h + ' hours, ' + m + ' minutes';
    },
  },
  mounted() {},
};
</script>

<style scoped>
.sectionContainer {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5%;
  padding: 1vw;
}

.title {
  font-weight: 700;
  margin-top: -1em;
  margin-bottom: 2em;
}

.counter {
  font-size: 5em;
  align-items: center;
}
</style>
