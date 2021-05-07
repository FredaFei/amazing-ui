import { createApp } from 'vue';
import App from './App.vue';
import { createWebHashHistory, createRouter } from 'vue-router';
import './index.css';
import HelloWorld from './components/HelloWorld.vue';
import Test from './components/Test.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/test', component: Test },
  ]
});
const app = createApp(App);
app.use(router);
app.mount('#app');
