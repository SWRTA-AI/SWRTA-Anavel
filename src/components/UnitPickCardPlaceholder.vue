<template>
  <b-container class="unitPickCardPlaceholderContainer">
    <b-row>
      <b-col
        class="col-3 px-0 py-0"
        :class="[layoutType == 1 ? 'order-1' : '']"
      >
        <div class="mb-3" :class="[isSelecting ? 'glowing' : null]">
          <b-img
            :src="IMAGE_URL_PREFIX + PLACEHOLDER_IMG"
            alt="placeholder"
          />
        </div>
      </b-col>
      <b-col
        class="text-area col-9 "
        :class="[layoutType == 1 ? 'text-right' : 'text-left']"
      >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  props: {
    pickIndex: Number,
    layoutType: Number,
  },
  data() {
    return {
      PLACEHOLDER_IMG: 'unit_icon_0010_1_0.png',
    };
  },
  computed: {
    ...mapState(['IMAGE_URL_PREFIX']),
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
}
.text-area {
  align-self: center;
  font-size: 1.3em;
  opacity: 0.7;
}

@keyframes glowing {
  0% {
    background-color: #e4e6c1;
    box-shadow: 0 0 3px #e4e6c1;
  }
  50% {
    background-color: #ffeb93;
    box-shadow: 0 0 15px #ffdd93;
  }
  100% {
    background-color: #e4e6c1;
    box-shadow: 0 0 3px #e4e6c1;
  }
}

.glowing {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: inline-block;
  padding: 5px;

  animation: glowing 1300ms infinite;
}

.glowing img {
  opacity: 0.7;
}
</style>
