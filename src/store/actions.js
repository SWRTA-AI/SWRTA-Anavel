export default {
  pickUnit: ({ commit }, { unit, idx }) => {
    commit('SET_PICK', { unit, idx });
  },
  unpickUnit: ({ commit }, idx) => {
    commit('SET_PICK', { unit: null, idx });
  },
  setBannedUnits: ({ commit }, units) => {
    commit('SET_BAN', units);
  },
  setFirstPick: ({ commit }, isFirstPick) => {
    commit('SET_FIRST_PICK', isFirstPick);
  },
};
