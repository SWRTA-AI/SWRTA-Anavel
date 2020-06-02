import Vue from 'vue';
import VueRouter from 'vue-router';

import PickBan from '../views/PickBan.vue';
import Tierlist from '../views/Tierlist.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/pickban',
    name: 'PickBan',
    component: PickBan,
  },
  {
    path: '/tierlist',
    name: 'Tierlist',
    component: Tierlist,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/*',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
