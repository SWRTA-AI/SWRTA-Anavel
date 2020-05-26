<template>
  <b-container fluid class="footerContainer bg-info">
    <footer>
      <b-row class="py-3">
        <b-col>
          {{ footerText }}
        </b-col>
      </b-row>
    </footer>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      appName: 'SWRTA-AI',
      version: 'v1.0.0',
      author: 'Jessinra',
    };
  },
  computed: {
    footerText() {
      return `${this.appName} (${this.version}), Ventilated by ${this.author} ©${this.currentYear}`;
    },
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.footerContainer {
  margin-top: 100px;
}
</style>
