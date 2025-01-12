<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	color: {
		type: String,
		default: "black",
	},
});
	
</script>

<template>
	<div class="box" :style="`background-color: ${color};`"></div>
</template>

<style>
.box {
	width: 100px;
	height: 100px;
}
</style>