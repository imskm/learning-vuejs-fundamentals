<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// gotoProductsPage
const gotoProductsPage = () => {
	// processing ...
	// route object -> {name: 'product.index'}
	router.push({name: 'product.index'});
}
</script>
<template>
	<h1>Pages</h1>
	<ol>
<!-- 		<li>
			<a href="/todo">Todo page</a>
		</li> -->
		<li>
			<router-link :to="{name: 'home'}">Home Page</router-link>
		</li>
		<li>
			<!-- <router-link to="/todo">Todo Page</router-link> -->
			<router-link :to="{name: 'todo'}">Todo Page</router-link>
		</li>
		<li>
			<router-link :to="{name: 'product.index'}">Products Page</router-link>
		</li>
		<li>
			<!-- gotoProductsPage -->
			<button @click="gotoProductsPage">Go to Products Page using button</button>
		</li>
	</ol>
</template>