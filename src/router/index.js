import Vue from 'vue';
import Router from 'vue-router';
import { config } from './config';
import login from '@/views/login';
Vue.use(Router);


const router = new Router({
	routes: [
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			...config
		}
	]
});
// router.beforeEach((to, from, next) => {
//   let app = router.app;
//   if (to.name === 'login') {
//     next();
//   } else {
//     if (!store.state.login.userInfo) {
//       app.$nextTick(() => {
//       });
//     }
//   }
// });

export default router;
export const menus = config.children
 ? config.children.filter(item => item.isNav)
 : [];