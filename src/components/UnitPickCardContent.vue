<template>
  <b-container class="unitPickCardPlaceholderContainer">
    <b-row>
      <b-col
        class="col-3 px-0 py-0"
        :class="[layoutType == 1 ? 'order-1' : '']"
      >
        <b-img
          :src="IMAGE_URL_PREFIX + unit.image_filename"
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
import { mapState, mapActions } from 'vuex';
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
  data() {
    return {
      detailedInfo: null,
    };
  },
  computed: {
    ...mapState(['IMAGE_URL_PREFIX']),

    unitDetailInfoUrl() {
      return this.unit
        ? `https://swarfarm.com/api/bestiary/${this.unit.pk}?format=json`
        : null;
    },

    leaderskill() {
      let skill = this.detailedInfo.leader_skill;
      if (['Arena', 'General', 'Element'].includes(skill.area)) {
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
      }
    },
  },

  methods: {
    ...mapActions(['unpickUnit']),

    unpickSelf() {
      this.unpickUnit(this.pickIndex);
      this.detailedInfo = null;
    },

    fetchUnitDetailInfo() {
      if (this.unitDetailInfoUrl) {
        fetch(this.unitDetailInfoUrl, {
          method: 'GET',
        })
          .then(response => response.json())
          .then(data => (this.detailedInfo = data));
      }
    },
  },

  mounted() {
    this.fetchUnitDetailInfo();
  },
};
</script>

<style scoped>
img {
  border-radius: 10px;
}
</style>
