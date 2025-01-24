<script setup>
import { ref, onMounted } from 'vue';

import ProductCard from '@/ProductCard.vue';

const products = ref([
	{ id: 1, name: "T-Shirt", price: 400.00, qty: 1, image_url: 'https://placehold.co/400x400.png?text=T-Shirt', visible: true },
	{ id: 2, name: "Jeans", price: 500.00, qty: 2, image_url: 'https://placehold.co/400x400.png?text=Jeans', visible: true },
	{ id: 3, name: "Redmi Note Pro 10", price: 600.00, qty: 1, image_url: 'https://placehold.co/400x400.png?text=Redmi Note Pro 10', visible: true  },
	{ id: 4, name: "Apple", price: 700.00, qty: 1, image_url: 'https://placehold.co/400x400.png?text=Apple', visible: true },
]);

const total = ref(0.00);

const calculateTotal = () => {
	total.value = 0.0;
	for (let i = 0; i < products.value.length; ++i) {
		const product = products.value[i];

		if (product.visible) {
			const productPrice = product.price * product.qty;

			total.value = total.value + productPrice;
		}
	}
}

const reCalculateTotal = (product, qty) => {
	product.qty = qty;
	calculateTotal();
}

const onRemove = (product) => {
	product.visible = false;
	calculateTotal();
}

onMounted(() => {
	calculateTotal();
});


</script>
<template>
	<div id="container">

		<div class="product-list">

			<template v-for="p in products">
				<ProductCard
					v-if="p.visible == true"
					:product="p"
					@on-qty-changed="reCalculateTotal"
					@on-remove="onRemove"
				/>
			</template>

		</div>

		<div class="order-summary">
			<p>Total: &#x20B9; {{ total }}</p>
		</div>
	</div>
</template>

<style>
#container {
	display: flex;
	gap: 16px;
	max-width: 1024px;
	margin: 0 auto;
	background-color: #F0F0F0;
	padding: 16px;

	.product-list {
		flex-basis: 60%;
		.product {
			background-color: #E0E0E0;
			border-radius: 8px;
			padding: 16px;
			margin-bottom: 16px;
			img {
				width: 200px;
			}
		}
	}
	.order-summary {
		flex-basis: 40%;
		font-size: 32px;
	}
}
</style>