<script>
	import IconSmall from "./IconSmall.svelte";

	let { iconType, onClick, title="" } = $props();
</script>

<button class="size-6 ml-1 rounded-none" onclick={onClick} title={title}>
	<div class="nudge-icon">
		<IconSmall type={iconType}></IconSmall>
	</div>
</button>

<style>
.nudge-icon {
	margin-left: -4px;
	margin-top: 0px;
}
</style>