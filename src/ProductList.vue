<script setup>
import { ref } from 'vue';

const products = ref([
	{ id: 1, name: "T-Shirt", visible: true },
	{ id: 2, name: "Jeans", visible: true },
	{ id: 3, name: "Redmi Note Pro 10", visible: true },
	{ id: 4, name: "Apple", visible: true },
]);

const hide = (product) => {
	product.visible = false;
}
</script>
<template>
	<ul>

		<template v-for="p in products">
			<li v-if="p.visible">
				<div class="product">
					<div>{{ p.id }}</div>
					<div>{{ p.name }}</div>
					<button @click="hide(p)">Hide</button>
				</div>
			</li>
		</template>

	</ul>
</template>
<style>
li {
	margin-bottom: 1rem;
}
.product {
	display: flex;
	gap: 1rem;
}
</style>