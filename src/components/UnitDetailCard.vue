<template>
  <b-container
    class="UnitDetailCardContainer py-1 px-3"
    v-if="detailedInfo != null"
  >
    <div class="generalInfoContainer section">
      <b-row class="generalInfoContainer section">
        <b-col class="col-4 unitPicture">
          <b-img :src="unitPicUrl"></b-img>
        </b-col>
        <b-col class="col-8 align-self-center">
          <b-row>
            <b-col class="col-2 unitElement pl-0 pr-1 text-right">
              <b-img :src="elementPicUrl"></b-img>
            </b-col>
            <b-col class="col-9 unitName pl-1 text-left">
              {{ unitName }}
            </b-col>
          </b-row>
          <b-row class="unitStarContainer">
            <b-col class="col-7">
              <b-img
                :src="starsPicUrl"
                v-for="i of unitGrade"
                :key="i"
              ></b-img>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>

    <div class="traitsContainer section" v-if="traits">
      <b-row class="section-title">
        <b-col>
          Traits
        </b-col>
      </b-row>
      <b-row class="section-info">
        <b-col>{{ traits }}</b-col>
      </b-row>
    </div>

    <div
      class="buffDebuffContainer section"
      v-if="buffDebuff.length > 0"
    >
      <b-row class="section-title py-1">
        <b-col>
          Buff / Debuff
        </b-col>
      </b-row>
      <b-row class="section-info py-0">
        <b-col>
          <b-img
            class="mx-1"
            :src="url"
            v-for="(url, i) of buffDebuff"
            :key="i"
          ></b-img>
        </b-col>
      </b-row>
    </div>

    <div class="leaderskillContainer section" v-if="leaderskill">
      <b-row class="section-title">
        <b-col>
          Leads (RTA)
        </b-col>
      </b-row>
      <b-row class="section-info">
        <b-col> {{ leaderskill }}</b-col>
      </b-row>
    </div>

    <div class="skillsContainer section">
      <b-row class="section-title">
        <b-col>
          Skills
        </b-col>
      </b-row>

      <b-row class="section-info pt-3">
        <b-col v-for="(url, i) of skillsPicUrls" :key="i">
          <div :class="shownSkill == i ? 'active' : 'inactive'">
            <b-img :src="url" @click="showSkillInfo(i)"></b-img>
          </div>
        </b-col>
      </b-row>

      <SkillSection
        :hidden="i != shownSkill"
        v-for="(skill, i) of detailedInfo.skills"
        :key="i"
        :skill="skill"
      />
    </div>
  </b-container>
</template>

<script>
import SkillSection from '@/components/UnitDetailCardSkill.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  components: {
    SkillSection,
  },
  props: {
    // unit: Object,
  },
  data() {
    return {
      shownSkill: 0,
    };
  },
  computed: {
    ...mapState(['IMAGE_URL_PREFIX']),
    ...mapGetters(['getLastPickedUnit']),

    unitName() {
      return this.detailedInfo.name;
    },
    unitPicUrl() {
      return `${this.IMAGE_URL_PREFIX}monsters/${this.detailedInfo.image_filename}`;
    },
    elementPicUrl() {
      return `${
        this.IMAGE_URL_PREFIX
      }elements/${this.detailedInfo.element.toLowerCase()}.png`;
    },

    unitGrade() {
      return this.detailedInfo.base_stars;
    },

    starsPicUrl() {
      let category = this.detailedInfo.is_awakened
        ? 'awakened'
        : 'unawakened';
      return `${this.IMAGE_URL_PREFIX}stars/star-${category}.png`;
    },

    buffDebuff() {
      let knownBuffPicUrls = [];
      for (let skill of this.detailedInfo.skills) {
        for (let effect of skill.skill_effect) {
          if (effect.icon_filename.length > 0) {
            let url = `${this.IMAGE_URL_PREFIX}buffs/${effect.icon_filename}`;
            knownBuffPicUrls.push(url);
          }
        }
      }
      return knownBuffPicUrls.sort();
    },

    traits() {
      let effects = new Set();
      for (let skill of this.detailedInfo.skills) {
        for (let effect of skill.skill_effect) {
          effects.add(effect.name);
        }
      }
      return new Array(...effects).sort().join(', ');
    },

    skillsPicUrls() {
      let skillsPicUrls = [];
      for (let skill of this.detailedInfo.skills) {
        let url = `${this.IMAGE_URL_PREFIX}skills/${skill.icon_filename}`;
        skillsPicUrls.push(url);
      }
      return skillsPicUrls;
    },

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
      return `${element} ${attribute} ${skill.amount}%`;
    },
  },
  asyncComputed: {
    async detailedInfo() {
      if (this.getLastPickedUnit) {
        let url = `https://swarfarm.com/api/bestiary/${this.getLastPickedUnit.pk}?format=json`;
        return await this.fetchUnitDetailInfo(url);
      }
    },
  },
  methods: {
    async fetchUnitDetailInfo(url) {
      try {
        let result = await fetch(url, { method: 'GET' });
        return result.json();
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    showSkillInfo(i) {
      this.shownSkill = i;
    },
  },
  watch: {
    detailedInfo() {
      this.shownSkill = 0;
    },
  },
};
</script>

<style scoped>
.UnitDetailCardContainer {
  background-color: #2a2a2a;
}

.section {
  background-color: #4f4f4f;
  margin: 20px 0px;
}

.section-title {
  background-color: #3f3f3f;
  font-weight: 700;
  font-size: 1.1em;
  margin: 0px;
  padding-top: 3px;
  padding-bottom: 3px;
}

.section-info {
  margin: 0px;
  padding: 5px 0px;
}

.generalInfoContainer {
  background-color: #2a2a2a;
}

.unitPicture {
  padding: 0;
  text-align: left;
}

.unitPicture img {
  max-width: 100%;
  border-radius: 14px;
}

.unitName {
  font-size: 1.8em;
}

.unitElement {
  align-self: center;
}

.unitElement img {
  max-width: 1.5em;
}

.unitStarContainer img {
  max-width: 1em;
}

.buffDebuffContainer img {
  max-width: 2.8em;
  border-radius: 5px;
}

.skillsContainer img {
  max-width: 5em;
  border-radius: 14px;
  cursor: pointer;
}

.skillsContainer .inactive img {
  filter: brightness(40%);
}

.skillsContainer .inactive img:hover {
  filter: brightness(80%);
}
</style>
