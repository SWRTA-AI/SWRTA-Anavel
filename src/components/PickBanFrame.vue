<template>
  <b-container class="pickBanContainer offset-1">
    <b-row>
      <b-col class="title col-10 offset-1 text-center mb-3">
        Pick - Bans
      </b-col>
      <b-col class="col-1 my-2">
        <b-button variant="outline-danger" @click="resetPicks">
          <span>reset</span>
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="col pr-4">
        <div class="subtitle text-right">First Pick</div>
        <UnitPickCard
          v-for="i of FIRST_PICK_IDX"
          :key="i"
          :pickIndex="i"
        />
      </b-col>
      <!-- <b-col class="col-1"></b-col> -->
      <b-col class="col offset-1 pl-4">
        <div class="subtitle text-left">Second Pick</div>
        <UnitPickCard
          v-for="i of SECOND_PICK_IDX"
          :key="i"
          :pickIndex="i"
        />
      </b-col>
    </b-row>
    <BanPredictor v-if="!isAbleToPick" />
  </b-container>
</template>

<script>
import UnitPickCard from '@/components/UnitPickCard.vue';
import BanPredictor from '@/renderless/BanPredictor.vue';
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  components: {
    UnitPickCard,
    BanPredictor,
  },
  computed: {
    ...mapState(['FIRST_PICK_IDX', 'SECOND_PICK_IDX']),
    ...mapGetters(['isAbleToPick']),
  },
  methods: {
    ...mapActions(['resetPicks']),
  },
};
</script>

<style scoped>
.pickBanContainer {
  background-color: #2a2a2a;
}
.title {
  font-size: 3em !important;
}
.subtitle {
  font-size: 1.3em;
  margin: 0 2px 20px 2px;
}
</style>
