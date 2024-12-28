<script setup>
import { ref } from 'vue';

const product = ref({
	name: "T-Shirt",
	price: "Rs. 1500",
	image_url: "https://placehold.co/500x500",
	qty: 1,
});
</script>

<template>
	<div class="product">
		<img :src="product.image_url" alt="">
		<h1>{{ product.name }}</h1>
		<p>{{ product.price }}</p>
		<input type="number" name="qty" id="qty" v-model="product.qty">
		<p>Qty: {{ product.qty }}</p>
	</div>
</template>

<style>
.product {
	max-width: 400px;
	background-color: #F0F0F0;
	border-radius: 8px;
	overflow: hidden;
}

.product img {
	max-width: 100%;
}

.product input[type=number] {
	font-size: 20px;
	padding: 12px;
}
</style>