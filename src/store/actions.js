export default {
  pickUnit: ({ commit }, { unit, idx }) => {
    commit('SET_PICK', { unit, idx });
  },
  unpickUnit: ({ commit }, idx) => {
    commit('SET_PICK', { unit: null, idx });
  },
  resetPicks: ({ commit }) => {
    let newArray = new Array(10).fill(null);
    commit('SET_PICKS', newArray);
  },
  setBannedUnits: ({ commit }, units) => {
    commit('SET_BAN', units);
  },
  setFirstPick: ({ commit }, isFirstPick) => {
    commit('SET_FIRST_PICK', isFirstPick);
  },
};
