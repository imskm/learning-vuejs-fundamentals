import { createRouter, createWebHistory } from 'vue-router'

import TodoPage from "@/TodoPage.vue";
import ProductPage from "@/ProductPage.vue";

// const routes = [
// 	{
// 		path: '/todo',
// 		component: TodoPage,
// 	},
// 	{
// 		path: '/products',
// 		component: ProductPage,
// 	},
// ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  		{
  			path: '/',
  			component: null,
  		},
		{
			path: '/todo',
			component: TodoPage,
		},
		{
			path: '/products',
			component: ProductPage,
		},
	],
});

export default router;