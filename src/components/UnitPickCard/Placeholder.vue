<template>
  <b-container class="unitPickCardPlaceholderContainer">
    <b-row>
      <b-col
        class="col-4 px-0 py-0"
        :class="[layoutType == 1 ? 'order-1' : '']"
      >
        <div class="mb-3" :class="[isSelecting ? 'glowing' : null]">
          <b-img :src="placeholderImg" alt="placeholder" />
        </div>
      </b-col>
      <b-col
        class="text-area col-8 "
        :class="[layoutType == 1 ? 'text-right' : 'text-left']"
      >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    pickIndex: Number,
    layoutType: Number,
  },
  data() {
    return {
      placeholderImg:
        'https://swarfarm.com/static/herders/images/monsters/unit_icon_0010_1_0.png',
    };
  },
  computed: {
    ...mapGetters(['getCurrentPickIndex']),
    isSelecting() {
      return this.getCurrentPickIndex == this.pickIndex;
    },
  },
};
</script>

<style scoped>
img {
  opacity: 0.2;
  border-radius: 10px;
  max-width: 100%;
}

@keyframes glowing {
  0% {
    background-color: #e4e6c1;
    box-shadow: 0 0 1vw #e4e6c1;
  }
  50% {
    background-color: #ffeb93;
    box-shadow: 0 0 2vw #ffdd93;
  }
  100% {
    background-color: #e4e6c1;
    box-shadow: 0 0 1vw #e4e6c1;
  }
}

.glowing {
  -webkit-border-radius: 10px;
  border-radius: 10%;
  border: none;
  cursor: pointer;
  display: inline-block;
  padding: 5%;

  animation: glowing 1300ms infinite;
}

.glowing img {
  opacity: 0.4;
}
</style>
