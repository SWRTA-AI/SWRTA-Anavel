<template>
  <div id="app">
    <NavBar />
    <div class="flex-wrapper">
      <b-container fluid>
        <router-view />
      </b-container>
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style lang="scss">
html {
  background-color: #121212 !important;
}

#app {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #121212 !important;
}

// force footer on the ground
.flex-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}
</style>
