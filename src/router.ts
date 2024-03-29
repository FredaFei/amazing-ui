import { createWebHashHistory, createRouter } from 'vue-router';
// import IconDemo from './components/icon-demo/IconDemo.vue';
import ButtonDemo from './components/button-demo/ButtonDemo.vue';
import SwitchDemo from './components/switch-demo/SwitchDemo.vue';
import RadioDemo from './components/radio-demo/RadioDemo.vue';
import CheckboxDemo from './components/checkbox-demo/CheckboxDemo.vue';
import InputDemo from './components/input-demo/InputDemo.vue';
import ControllCountDemo from './components/controll-count-demo/ControllCountDemo.vue';
import GridDemo from './components/grid-demo/GridDemo.vue';
import LayoutDemo from './components/layout-demo/LayoutDemo.vue';
import TabsDemo from './components/tabs-demo/TabsDemo.vue';
import DialogDemo from './components/dialog-demo/DialogDemo.vue';
import PagerDemo from './components/pager-demo/PagerDemo.vue';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Markdown from './components/Markdown.vue';
import { h } from 'vue';

const history = createWebHashHistory();

import getStarted from './markdown/getStarted.md';
import install from './markdown/install.md';

/**
 * 本项目中的rollup配置，不支js持动态导入
 * */
// const md = (filename) => h(Markdown, { path: `../markdown/${filename}.md`, key: filename });
const md = (string) => h(Markdown, { content: string, key: string });
export const router = createRouter({
  history,
  routes: [
    // { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '/', redirect: '/doc/get-started' },
        { path: '', redirect: '/doc/get-started' },
        { path: 'get-started', component: md(getStarted) },
        { path: 'install', component: md(install) },
        // { path: 'icon', component: IconDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'switch', component: SwitchDemo },
        { path: 'radio', component: RadioDemo },
        { path: 'checkbox', component: CheckboxDemo },
        { path: 'input', component: InputDemo },
        { path: 'controllCount', component: ControllCountDemo },
        { path: 'grid', component: GridDemo },
        { path: 'layout', component: LayoutDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'pager', component: PagerDemo },
      ]
    },
  ]
});
router.afterEach(() => {
  console.log('change router');
});