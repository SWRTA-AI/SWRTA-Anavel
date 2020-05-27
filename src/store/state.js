import bestiaryJSON from '@/data/bestiary.json';

export default {
  gl_picks: new Array(10).fill(null),
  gl_ban_suggestions: new Array(10).fill(null),
  gl_last_picked: null,

  BESTIARY: bestiaryJSON,
  FIRST_PICK_IDX: [0, 3, 4, 7, 8],
  SECOND_PICK_IDX: [1, 2, 5, 6, 9],

  IMAGE_URL_PREFIX: 'https://swarfarm.com/static/herders/images/',

  SUGGESTION_API_URL: 'http://localhost:5001/api/predictor/pick/',
  BAN_API_URL: 'http://localhost:5001/api/predictor/ban/v2/',
  PLACEHOLDER_MONSTER_IMG:
    'https://swarfarm.com/static/herders/images/monsters/unit_icon_0010_1_0.png',

  // unused
  gl_bans: [null, null],
  gl_isFirstPick: null,
};
