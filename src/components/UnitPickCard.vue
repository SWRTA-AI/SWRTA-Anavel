<template>
  <div class="unitPickCardContainer">
    <b-row>
      <Content
        v-if="unit"
        :layoutType="layoutType"
        :pickIndex="pickIndex"
        :unit="unit"
      />
      <Placeholder
        v-if="unit == null"
        :layoutType="layoutType"
        :pickIndex="pickIndex"
      />
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Content from '@/components/UnitPickCardContent.vue';
import Placeholder from '@/components/UnitPickCardPlaceholder.vue';

export default {
  components: {
    Content,
    Placeholder,
  },
  props: {
    pickIndex: Number,
  },
  computed: {
    ...mapState(['FIRST_PICK_IDX', 'gl_picks']),
    unit() {
      return this.gl_picks[this.pickIndex];
    },
    layoutType() {
      return this.FIRST_PICK_IDX.includes(this.pickIndex) ? 1 : 2;
    },
  },
};
</script>
