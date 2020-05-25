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
import { mapActions } from 'vuex';
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
</style>
