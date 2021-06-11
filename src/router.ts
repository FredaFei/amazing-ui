import { createWebHashHistory, createRouter } from 'vue-router';
import ButtonDemo from './components/button-demo/ButtonDemo.vue';
import SwitchDemo from './components/switch-demo/SwitchDemo.vue';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Markdown from './components/Markdown.vue';
import { h } from 'vue';

const history = createWebHashHistory();

const md = (filename) => h(Markdown, { path: `../markdown/${filename}.md`, key: filename });
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: '/doc/get-started' },
        { path: 'get-started', component: md('getStarted') },
        { path: 'install', component: md('install') },
        { path: 'button', component: ButtonDemo },
        { path: 'switch', component: SwitchDemo },
      ]
    },
  ]
});
router.afterEach(() => {
  console.log('change router');
});