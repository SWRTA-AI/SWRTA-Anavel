<template>
  <b-container fluid class="homeContainer">
    <Introduction />

    <!-- <b-row>
      <b-col>
        data collected
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        Changelog
      </b-col>
    </b-row> -->
    <DataCount />
    <Credits />
    <Updates />
    <Disclaimer />
    <Contribute />

    <!-- <b-row>
      <b-col>
        Contact us
      </b-col>
    </b-row> -->
  </b-container>
</template>

<script>
import Introduction from '@/components/Home/Introduction.vue';
import Credits from '@/components/Home/Credits.vue';
import Updates from '@/components/Home/Updates.vue';
import DataCount from '@/components/Home/DataCount.vue';
import Disclaimer from '@/components/Home/Disclaimer.vue';
import Contribute from '@/components/Home/Contribute.vue';

export default {
  components: {
    Introduction,
    Disclaimer,
    Credits,
    Updates,
    DataCount,
    Contribute,
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style scoped>
.homeContainer {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)),
    url('https://bc-gb.com/wp-content/uploads/2019/10/com2us_swc19.png');
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  width: 100%;
  height: 100%;

  min-height: 100vh;
  margin-bottom: -30px;
}
</style>
