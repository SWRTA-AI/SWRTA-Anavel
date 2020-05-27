<template>
  <div class="unitPickCardContainer">
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
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Content from '@/components/UnitPickCard/Content.vue';
import Placeholder from '@/components/UnitPickCard/Placeholder.vue';

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
