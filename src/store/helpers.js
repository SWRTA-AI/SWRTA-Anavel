export default {
  formatUnit(state, unit) {
    if (!unit.image_filename.includes(state.IMAGE_URL_PREFIX)) {
      unit.image_filename = `${state.IMAGE_URL_PREFIX}${unit.image_filename}`;
    }
    return unit;
  },
};
