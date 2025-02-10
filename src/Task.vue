<script setup>
const props = defineProps({
	task: {
		type: Object,
		required: true,
	}
});
</script>
<template>
	<div class="task">
		<input v-model="task.done" type="checkbox" name="task_done" id="task_done">
		<p :class="{'is-done': task.done }">{{ task.task }}</p>
	</div>

<!--
	<div class="task">
		<input type="checkbox" name="task_done" id="task_done" checked="checked">
		<p class="is-done">My task 2</p>
	</div>
 -->
</template>
<style>
.task {
	display: flex;
	gap: 8px;

	.is-done {
		color: #888888;
		text-decoration: line-through;
	}
}
</style>