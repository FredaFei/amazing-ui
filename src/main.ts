import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import './index.scss';
import 'amazing-ui-vue3/dist/lib/index.css';
import 'github-markdown-css';
import Markdown from './components/Markdown.vue';
import Space from './components/Space.vue';


const app = createApp(App);
app.use(router);
app.mount('#app');
app.component('Markdown', Markdown);
app.component('Space', Space);
