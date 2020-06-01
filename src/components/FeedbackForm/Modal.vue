<template>
  <b-container>
    <div>
      <b-modal
        ref="feedbackModal"
        id="feedbackModal"
        :hide-header="true"
        :hide-footer="true"
      >
        <FeedbackCard />
      </b-modal>
    </div>
  </b-container>
</template>

<script>
import FeedbackCard from '@/components/FeedbackForm/Card.vue';

export default {
  components: {
    FeedbackCard,
  },
  // methods: {
  //   showModal() {
  //     this.$refs['feedbackModal'].show();
  //   },
  //   hideModal() {
  //     this.$refs['feedbackModal'].hide();
  //   },
  // },
  // mounted() {
  //   this.showModal();
  // },
};
</script>

<style scoped></style>
<style>
.modal-content {
  background: transparent !important;
}
</style>
