export default {
  getTeamUnits: state => {
    let idxes = state.gl_isFirstPick
      ? state.FIRST_PICK_IDX
      : state.SECOND_PICK_IDX;

    let result = [];
    for (let i of idxes) {
      result.push(state.gl_picks[i]);
    }

    return result;
  },

  getOpponentTeamUnits: state => {
    let idxes = state.gl_isFirstPick
      ? state.SECOND_PICK_IDX
      : state.FIRST_PICK_IDX;

    let result = [];
    for (let i of idxes) {
      result.push(state.gl_picks[i]);
    }

    return result;
  },

  getPickCount: state => {
    return state.gl_picks.length;
  },

  getPicks: state => {
    return state.gl_picks;
  },

  getCurrentPickIndex: state => {
    // return first 'empty' index to fill in, guarantee exist
    return state.gl_picks.findIndex(x => x == null);
  },

  isAbleToPick: state => {
    return state.gl_picks.filter(x => x == null).length > 0;
  },

  getAwakenBestiary(state) {
    return state.BESTIARY.filter(
      x => Math.floor(x.com2us_id / 10) % 10 == 1,
    );
  },

  searchBestiary(state) {
    return (query, showUnawakened = false) => {
      return state.BESTIARY.filter(x =>
        x.name.toLowerCase().includes(query.toLowerCase()),
      ).filter(
        x => showUnawakened || Math.floor(x.com2us_id / 10) % 10 == 1,
      );
    };
  },
};
