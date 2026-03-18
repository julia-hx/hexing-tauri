<script lang="ts">
	let {
		toggleState = {value:false},
		label = "",
		onToggled = ()=>{},
	} = $props();

	function toggle() {
		toggleState.value = !toggleState.value;
		onToggled();
	}
</script>

<div class="flex flex-row">
	<div class="toggle-background">
		<button class="toggle-button bg-gray-300! dark:bg-gray-800!" title="toggle-btn" onclick={()=>{ toggle(); }}>
			{#if toggleState.value === true}
				<div class="toggle toggle-on"></div>
			{/if}
			{#if toggleState.value === false}
				<div class="toggle toggle-off"></div>
			{/if}
		</button>
	</div>
	{#if label.length > 0}
		<span class="label toggle-label">{label}</span>
	{/if}
</div>

<style>
.toggle-background {
	height: 26px;
	width: 40px;
	border-radius: 12px;
	border-width: 2px;
	border-color: var(--color-accent);
}

.toggle-background button {
	height: 22px;
	width: 36px;
	border-radius: 12px;
}

.toggle {
	height: 18px;
	width: 18px;
	border-radius: 8px;
}

.toggle-off {
	background-color: var(--color-gray-500);
	margin-top: 0px;
	margin-left: -3px;
}

.toggle-on {	
	background-color: var(--color-accent);
	margin-top: 0px;
	margin-left: 10px;
}

.toggle-label {
	margin-left: -4px;
	margin-top: -1px;
}

</style>