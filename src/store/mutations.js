export default {
  SET_PICK: (state, { unit, idx }) => {
    if (state.gl_picks.length > idx) {
      state.gl_picks.splice(idx, 1, unit);
    }
  },
  SET_PICKS: (state, picks) => {
    state.gl_picks = picks;
  },
  SET_LAST_PICKED: (state, unit) => {
    state.gl_last_picked = unit;
  },
  SET_BAN_SUGGESTION: (state, { unit, idx }) => {
    if (state.gl_ban_suggestions.length > idx) {
      state.gl_ban_suggestions.splice(idx, 1, unit);
    }
  },
  SET_BAN_SUGGESTIONS: (state, suggestions) => {
    state.gl_ban_suggestions = suggestions;
  },
  SET_FIRST_PICK: (state, isFirstPick) => {
    state.gl_isFirstPick = isFirstPick;
  },
};
