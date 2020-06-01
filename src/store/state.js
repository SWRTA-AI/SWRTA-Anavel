import bestiaryJSON from '@/data/bestiary.json';
import tierlistJSON from '@/data/tierlist.json';
import { DUMMY_RESPONSE } from './mock.js';
import { URLS } from './const.js';

export default {
  gl_picks: new Array(10).fill(null),
  gl_ban_suggestions: new Array(10).fill(null),
  active_unit: null,

  BESTIARY: bestiaryJSON,
  TIERLIST: tierlistJSON,
  FIRST_PICK_IDX: [0, 3, 4, 7, 8],
  SECOND_PICK_IDX: [1, 2, 5, 6, 9],

  DEVELOPMENT_MODE: true,
  DUMMY_RESPONSE: DUMMY_RESPONSE,
  URLS: URLS,

  // unused
  gl_bans: [null, null],
  gl_isFirstPick: null,
};
