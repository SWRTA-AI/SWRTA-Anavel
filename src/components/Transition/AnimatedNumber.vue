<template>
  <div :class="[isShown ? '' : 'hidden']">
    {{ displayNumber }}
  </div>
</template>

<script>
export default {
  props: {
    number: { default: 0 },
    delay: { default: 0 },
    duration: { default: 10 },
  },
  data: function() {
    return {
      isShown: false,
      displayNumber: 0,
      interval: false,
    };
  },
  methods: {
    animate() {
      clearInterval(this.interval);

      if (this.number == this.displayNumber) {
        return;
      }

      this.interval = window.setInterval(
        function() {
          if (this.displayNumber != this.number) {
            var change =
              (this.number - this.displayNumber) / this.duration;
            change =
              change >= 0 ? Math.ceil(change) : Math.floor(change);
            this.displayNumber = this.displayNumber + change;
          }
        }.bind(this),
        20,
      );
    },
  },
  ready: function() {
    this.displayNumber = this.number ? this.number : 0;
  },
  mounted() {
    setTimeout(() => {
      this.isShown = true;
      this.animate();
    }, this.delay);
  },
};
</script>

<style scoped>
.hidden {
  opacity: 0;
}
</style>
