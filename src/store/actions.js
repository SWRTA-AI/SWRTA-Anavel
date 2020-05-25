export default {
  pickUnit: ({ commit }, { unit, idx }) => {
    commit('SET_PICK', { unit, idx });
  },
  unpickUnit: ({ commit }, idx) => {
    commit('SET_PICK', { unit: null, idx });
  },
  resetPicks: ({ commit }) => {
    commit('SET_PICKS', new Array(10).fill(null));
    commit('SET_BAN_SUGGESTIONS', new Array(10).fill(null));
  },
  setBannedUnits: ({ commit }, units) => {
    commit('SET_BAN', units);
  },
  setFirstPick: ({ commit }, isFirstPick) => {
    commit('SET_FIRST_PICK', isFirstPick);
  },

  setBanSuggestion: (
    { commit, state },
    { suggestion, isFirstPick },
  ) => {
    let index = isFirstPick
      ? state.FIRST_PICK_IDX
      : state.SECOND_PICK_IDX;

    for (let i = 0; i < 5; i++) {
      let idx = index[i];
      let unit = suggestion[i];
      commit('SET_BAN_SUGGESTION', { unit, idx });
    }
  },
};
