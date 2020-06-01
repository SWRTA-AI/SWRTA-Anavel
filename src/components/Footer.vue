<template>
  <b-container
    fluid
    class="footerContainer bg-info"
    v-show="isMounted"
  >
    <footer>
      <b-row>
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
      isMounted: false,
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
  mounted() {
    // delay render footer
    setTimeout(() => {
      this.isMounted = true;
    }, 1500);
  },
};
</script>

<style scoped>
.footerContainer {
  padding: 15px;
  margin-top: 30px;
}
</style>
