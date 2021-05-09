import { createWebHashHistory, createRouter } from 'vue-router';
import Button from './components/Button.vue';
import Switch from './components/Switch.vue';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', component: Button },
        { path: 'button', component: Button },
        { path: 'switch', component: Switch },
      ]
    },
  ]
});
router.afterEach(() => {
  console.log('change router');
});