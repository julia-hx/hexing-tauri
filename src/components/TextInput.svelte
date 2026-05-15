<script>
	import { ValueType } from "../scripts/globals.svelte";

	let {
		valueState,
		valueType = ValueType.String,
		onValueChanged = () => {},
		label = "",
		displayClass = "text-left",
	} = $props();

	function validateValue() {
		
	}
</script>

<div class="flex justify-center items-center flex-col">
	<div class="flex flex-row items-center content-center">
		<form>
			<input
				type="text"
				bind:value={valueState.value}
				onchange={() => {
					validateValue();
					onValueChanged();
				}}
				class={displayClass}
			/>
		</form>

		{#if label.length > 0}
			<div class="label">
				<span>{label}</span>
			</div>
		{/if}
	</div>
</div>
