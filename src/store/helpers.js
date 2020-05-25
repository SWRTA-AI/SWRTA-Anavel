export default {
  formatUnit(state, unit) {
    if (!unit.image_filename.includes(state.IMAGE_URL_PREFIX)) {
      unit.image_filename = `${state.IMAGE_URL_PREFIX}${unit.image_filename}`;
    }
    return unit;
  },

  findTop2(array, indexes) {
    let max = -1;
    let max2 = -1;

    let idx = null;
    let idx2 = null;

    for (let i of indexes) {
      let n = array[i];
      if (n > max) {
        idx2 = idx;
        max2 = max;
        idx = i;
        max = n;
      } else if (n > max2) {
        idx2 = i;
        max2 = n;
      }
    }
    return { idx, idx2 };
  },
};
