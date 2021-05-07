import { createWebHashHistory, createRouter } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Test from './components/Test.vue';
import Doc from './views/Doc.vue';

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Test },
    {
      path: '/doc', component: Doc,
      children: [
        { path: '', component: Test },
        { path: 'test', component: Test },
        { path: 'hello', component: HelloWorld },
      ]
    },
  ]
});