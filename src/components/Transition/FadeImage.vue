<template>
  <transition name="fade" mode="out-in" class="div" appear>
    <div :key="src">
      <b-img :src="src" :alt="alt"></b-img>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
