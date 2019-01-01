import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';

Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.config.devtools = true;

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});