import Helper from './helpers.js';

export default {
  getFirstPickTeam: state => {
    let result = [];
    for (let i of state.FIRST_PICK_IDX) {
      result.push(state.gl_picks[i]);
    }
    return result;
  },

  getSecondPickTeam: state => {
    let result = [];
    for (let i of state.SECOND_PICK_IDX) {
      result.push(state.gl_picks[i]);
    }
    return result;
  },

  getBestFirstPickBan: (state, getters) => {
    let indexes = state.FIRST_PICK_IDX;
    let scores = getters.getBanScores;
    return Helper.findTop2(scores, indexes);
  },

  getBestSecondPickBan: (state, getters) => {
    let indexes = state.SECOND_PICK_IDX;
    let scores = getters.getBanScores;
    return Helper.findTop2(scores, indexes);
  },

  getBanScores: state => {
    return state.gl_ban_suggestions.map(x => (x ? x.score : -1));
  },

  getPickCount: state => {
    return state.gl_picks.length;
  },

  getPicks: state => {
    return state.gl_picks;
  },

  getPickIds: state => {
    return state.gl_picks
      .filter(x => x != null)
      .map(x => x.com2us_id);
  },

  getCurrentPickIndex: state => {
    // return first 'empty' index to fill in, guarantee exist
    return state.gl_picks.findIndex(x => x == null);
  },

  getLastPickedUnit: state => {
    return state.gl_last_picked;
  },

  isAbleToPick: state => {
    return state.gl_picks.filter(x => x == null).length > 0;
  },

  getAwakenBestiary(state) {
    return state.BESTIARY.filter(x => {
      return Math.floor(x.com2us_id / 10) % 10 == 1;
    }).map(x => {
      return Helper.formatUnit(state, x);
    });
  },

  searchBestiary(state) {
    return (query, showUnawakened = false) => {
      return state.BESTIARY.filter(x => {
        return x.name.toLowerCase().includes(query.toLowerCase());
      })
        .filter(x => {
          return (
            showUnawakened || Math.floor(x.com2us_id / 10) % 10 == 1
          );
        })
        .map(x => {
          return Helper.formatUnit(state, x);
        });
    };
  },

  getRandomUnits(state, getters) {
    return n => {
      let i = 0;
      let maxIdx = getters.getAwakenBestiary.length;
      let result = [];

      while (i < n) {
        let idx = Math.floor(Math.random() * maxIdx);
        let unit = getters.getAwakenBestiary[idx];
        if (result.indexOf(unit) < 0) {
          result.push(unit);
          i++;
        }
      }
      return result;
    };
  },
};
