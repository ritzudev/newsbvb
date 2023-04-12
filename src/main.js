import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '../src/router'
import iframeResize from 'iframe-resizer/js/iframeResizer';

const app = createApp({});

app.directive('resize', {
  mounted: function(el, { value = {} }) {
    el.addEventListener('load', () => iframeResize(value, el))
  },
  unmounted: function (el) {
    el.iFrameResizer.removeListeners();
  }
});
createApp(App).use(router).mount('#app')
