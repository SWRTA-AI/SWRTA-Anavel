import Vue from 'vue';
import VueRouter from 'vue-router';

import PickBan from '../views/PickBan.vue';
import Tierlist from '../views/Tierlist.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'PickBan',
    component: PickBan,
  },
  {
    path: '/tierlist',
    name: 'Tierlist',
    component: Tierlist,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
