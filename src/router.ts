import { createWebHashHistory, createRouter } from 'vue-router';
import Button from './components/Button.vue';
import Switch from './components/Switch.vue';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import GetStarted from './views/GetStarted.vue';
import Install from './views/Install.vue';

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: '/doc/get-started' },
        { path: 'get-started', component: GetStarted },
        { path: 'install', component: Install },
        { path: 'button', component: Button },
        { path: 'switch', component: Switch },
      ]
    },
  ]
});
router.afterEach(() => {
  console.log('change router');
});