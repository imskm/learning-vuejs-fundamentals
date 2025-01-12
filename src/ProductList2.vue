<script setup>
import { ref } from 'vue';

const props = defineProps({
	products: {
		type: Array,
		required: true,
	},
});

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