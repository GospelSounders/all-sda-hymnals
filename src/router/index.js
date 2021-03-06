import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import HymnNumbers from '@/components/HymnNumbers';
import About from '@/components/About';
import Settings from '@/components/Settings';
import Hymnal from '@/components/Hymnal';
import ManageDownloads from '@/components/ManageDownloads';
import Search from '@/components/Search';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HymnNumbers',
      component: HymnNumbers,
    },
    {
      path: '/HymnNumbers',
      name: 'HymnNumbers',
      component: HymnNumbers,
    },
    {
      path: '/About',
      name: 'About',
      component: About,
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings,
    },
    {
      path: '/Hymnal',
      name: 'Hymnal',
      component: Hymnal,
    },
    {
      path: '/ManageDownloads',
      name: 'ManageDownloads',
      component: ManageDownloads,
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search,
    }
  ],
});
