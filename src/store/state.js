import bestiaryJSON from '@/data/bestiary.json';

export default {
  gl_picks: new Array(10).fill(null),
  gl_bans: [null, null],
  gl_isFirstPick: null,

  BESTIARY: bestiaryJSON,
  IMAGE_URL_PREFIX:
    'https://swarfarm.com/static/herders/images/monsters/',
  FIRST_PICK_IDX: [0, 3, 4, 7, 8],
  SECOND_PICK_IDX: [1, 2, 5, 6, 9],
};
