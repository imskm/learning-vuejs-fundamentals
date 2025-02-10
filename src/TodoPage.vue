<script setup>
import { ref } from 'vue';
import Task from "@/Task.vue";

const tasks = ref([
	{task: "My new task", done: false },
	{task: "My new task 2", done: true },
	{task: "My new task 3", done: true },
	{task: "My new task 4", done: false },
]);


</script>
<template>
	<form action="" method="post">
		<input type="text" name="task" id="task">
		<button type="button">Add</button>
	</form>

	<hr>

	<div class="tasks-list">
		<template v-for="task in tasks">
			<Task :task="task" />
		</template>
		<!-- <div class="task">
			<input type="checkbox" name="task_done" id="task_done">
			<p>My new task</p>
		</div>
		<div class="task">
			<input type="checkbox" name="task_done" id="task_done" checked="checked">
			<p class="is-done">My task 2</p>
		</div>
		<div class="task">
			<input type="checkbox" name="task_done" id="task_done">
			<p>My task 3</p>
		</div> -->
	</div>

</template>