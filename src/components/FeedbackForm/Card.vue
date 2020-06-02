<template>
  <b-container class="px-0">
    <b-card :img-src="imageSrc" img-alt="FeedbackForm image" img-top>
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
  data() {
    return {
      imageSrc: require('@/assets/static/images/feedback_card.jpg'),
    };
  },
};
</script>

<style scoped>
.card-body {
  color: #121212 !important;
  padding: 1vw 1vw;
}

.card {
  border: 0;
}

.card-img-top {
  filter: brightness(80%);
}

@media screen and (max-width: 991px) {
  .card-body {
    color: #121212 !important;
    padding: 5vw 1vw;
  }
}
</style>
