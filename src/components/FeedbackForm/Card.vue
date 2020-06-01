<template>
  <b-container class="px-0">
    <b-card
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
    >
      <FeedbackForm />
    </b-card>
  </b-container>
</template>

<script>
import FeedbackForm from '@/components/FeedbackForm/Form.vue';
export default {
  components: {
    FeedbackForm,
  },
};
</script>

<style scoped>
.card-body {
  color: #121212 !important;
  padding: 5vw 1vw;
}
</style>
