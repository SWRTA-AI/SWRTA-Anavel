export default {
  SET_PICK: (state, { unit, idx }) => {
    if (state.gl_picks.length > idx) {
      state.gl_picks.splice(idx, 1, unit);
    }
  },
  SET_PICKS: (state, picks) => {
    state.gl_picks = picks;
  },
  SET_BAN: (state, unit_banned) => {
    state.gl_bans = unit_banned;
  },
  SET_FIRST_PICK: (state, isFirstPick) => {
    state.gl_isFirstPick = isFirstPick;
  },
};
