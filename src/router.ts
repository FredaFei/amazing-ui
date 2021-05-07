import { createWebHashHistory, createRouter } from 'vue-router';
import './index.css';
import HelloWorld from './components/HelloWorld.vue';
import Test from './components/Test.vue';
import Doc from './views/Doc.vue';

const history = createWebHashHistory();
const router = createRouter({
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
export default router;