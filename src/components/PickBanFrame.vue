<template>
  <b-container class="pickBanContainer offset-1">
    <b-row>
      <b-col class="title col text-center mb-3">
        Pick - Bans
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
  </b-container>
</template>

<script>
import UnitPickCard from '@/components/UnitPickCard.vue';
import { mapState } from 'vuex';
export default {
  components: {
    UnitPickCard,
  },
  computed: {
    ...mapState(['FIRST_PICK_IDX', 'SECOND_PICK_IDX']),
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
