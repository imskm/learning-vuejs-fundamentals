<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
	product: {
		type: Object,
		required: true,
	},
});

const emit = defineEmits([
	'onQtyChanged',
]);

const changeQuantity = () => {
	// console.log(event.target.value);
	emit('onQtyChanged', props.product, event.target.value);
}

// product = { id: 1, name: "T-Shirt", price: 400.00, qty: 1, image_url: 'https://placehold.co/400x400.png?text=T-Shirt'},
</script>
<template>
	<div class="product">
		<img :src="product.image_url" :alt="product.name">
		<p>Name: {{ product.name }}</p>
		<p>&#x20B9; {{ product.price }}</p>
		<p>
			<!-- <button>-</button> -->
			<input @input="changeQuantity" type="number" :value="product.qty" min="1">
			<!-- <button>+</button> -->
		</p>
	</div>
</template>