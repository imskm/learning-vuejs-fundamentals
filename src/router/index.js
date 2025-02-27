import { createRouter, createWebHistory } from 'vue-router'

import TodoPage from "@/TodoPage.vue";
import ProductPage from "@/ProductPage.vue";
import HomePage from "@/pages/HomePage.vue";

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
			name: 'home',
			component: HomePage,
		},
		{
			path: '/todo',
			name: 'todo',
			component: TodoPage,
		},
		{
			path: '/products',
			name: 'product.index',
			component: ProductPage,
		},
	],
});

export default router;