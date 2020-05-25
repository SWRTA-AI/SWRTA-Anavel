<template>
  <b-container class="unitPickCardPlaceholderContainer">
    <b-row>
      <b-col
        class="col-3 px-0 py-0"
        :class="[layoutType == 1 ? 'order-1' : '']"
      >
        <b-img
          :src="unit.image_filename"
          :alt="unit.name"
          class="unitPickTile mb-3"
          :class="glowType"
          @click="unpickSelf"
        />
      </b-col>
      <b-col
        class="col-9 px-4"
        :class="[layoutType == 1 ? 'text-right' : 'text-left']"
      >
        <div :hidden="unit.isPlaceholder">
          <div v-if="unit">
            <h4>{{ unit.name }}</h4>
          </div>
          <div v-if="detailedInfo">{{ leaderskill }}</div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import UnitPickTile from '@/components/UnitPickTile.vue';

export default {
  components: {
    UnitPickTile,
  },
  props: {
    pickIndex: Number,
    layoutType: Number,
    unit: Object,
  },
  computed: {
    leaderskill() {
      let skill = this.detailedInfo.leader_skill;
      if (!skill) {
        return;
      }
      let usableArea = ['Arena', 'General', 'Element'];
      if (!usableArea.includes(skill.area)) {
        return;
      }
      let element = skill.element ? `(${skill.element})` : '';
      let attribute = {
        'Attack Speed': 'Spd',
        'Attack Power': 'Atk',
        Defense: 'Def',
        HP: 'Hp',
        'Critical Rate': 'CRate',
        Resistance: 'Res',
        Accuracy: 'Acc',
      }[skill.attribute];
      return `Lead: ${element} ${attribute} ${skill.amount}%`;
    },
    isBanCandidate() {
      let { idx: c1 } = this.$store.getters.getBestFirstPickBan;
      let { idx: c2 } = this.$store.getters.getBestSecondPickBan;
      return this.pickIndex == c1 || this.pickIndex == c2;
    },
    isSubBanCandidate() {
      let { idx2: c1 } = this.$store.getters.getBestFirstPickBan;
      let { idx2: c2 } = this.$store.getters.getBestSecondPickBan;
      return this.pickIndex == c1 || this.pickIndex == c2;
    },
    glowType() {
      if (this.isBanCandidate) {
        return 'glowing glowing-1';
      } else if (this.isSubBanCandidate) {
        return 'glowing glowing-2';
      } else {
        return '';
      }
    },
  },
  asyncComputed: {
    async detailedInfo() {
      if (this.unit) {
        let url = `https://swarfarm.com/api/bestiary/${this.unit.pk}?format=json`;
        return await this.fetchUnitDetailInfo(url);
      }
    },
  },
  methods: {
    ...mapActions(['unpickUnit']),

    unpickSelf() {
      this.unpickUnit(this.pickIndex);
      this.detailedInfo = null;
    },

    async fetchUnitDetailInfo(url) {
      try {
        let result = await fetch(url, { method: 'GET' });
        return result.json();
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },
};
</script>

<style scoped>
img {
  border-radius: 10px;
}
.unitPickCardPlaceholderContainer {
  cursor: pointer;
}

@keyframes glowing-1 {
  0% {
    background-color: #ffcac8;
    box-shadow: 0 0 3px #ffcac8;
  }
  50% {
    background-color: #ff625d;
    box-shadow: 0 0 15px #ff625d;
  }
  100% {
    background-color: #ffcac8;
    box-shadow: 0 0 3px #ffcac8;
  }
}

@keyframes glowing-2 {
  0% {
    background-color: #f0e6bc;
    box-shadow: 0 0 3px #f0e6bc;
  }
  50% {
    background-color: #e0970f;
    box-shadow: 0 0 15px #e0970f;
  }
  100% {
    background-color: #f0e6bc;
    box-shadow: 0 0 3px #f0e6bc;
  }
}

.glowing {
  -webkit-border-radius: 15px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  display: inline-block;
  padding: 5px;
}

.glowing-1 {
  animation: glowing-1 2000ms infinite;
}

.glowing-2 {
  animation: glowing-2 2000ms infinite;
}
</style>
