<script setup>
import { ref } from 'vue';

let count = ref(0);
// count = count + 1;
// count += 1;
// ++count;
// count++;

const increment = () => {
	count.value = count.value + 1;
	console.log(count.value);
}

</script>

<template>
	<button @click="increment">
		<slot></slot>
		({{ count }})
	</button>
</template>