<script lang="ts">
	import IconButton from "./IconButton.svelte";
	import Dialog from "./Dialog.svelte";
	import { IconType, OptionConfig, OptionDialogState, optionDialogState } from "../globals.svelte";

	// $state({value: "..."}) state object, event, options string array, label
	let {
		id = "OptionsDialog",
		size = "md",
		icon = IconType.BarsThree,
		label = "Options",
		optionState,
		onOptionStateChanged,
		options = [new OptionConfig("-none-")],
		centerOptions = false
	} = $props();
</script>

<div>
	<Dialog id={id} label={label} size={size} icon={icon}>
		div wip
	</Dialog>
</div>

<!--
<div class="flex justify-center items-center flex-col">
	<div class="flex flex-row items-center">
		<IconButton iconType={IconType.BarsThree} onClick={showOptions} />

		<div bind:this={optionsContainer} hidden>
			<div class="optionPopup">
				<ul>
					{#if label.length > 0}
						<li class="optionsLabel flex flex-row justify-center mt-2">
							<span>{label}</span>
						</li>
					{/if}

					<div class="closeButton">
						<IconButton iconType={IconType.XMark} onClick={close}/>
					</div>
					
					{#if centerOptions}
					<div class="optionsScroller overflow-auto flex flex-col items-center space-y-1">
						{#each options as option}
							<li>
								<div class="flex flex-row">
									<button onclick={() => {selectOption(option.value);}}>
										{option.value}
									</button>
									{#if option.showTooltip}
										<div class="optionLabel">{option.tooltip}</div>
									{/if}
								</div>
							</li>
						{/each}
					</div>
					{/if}
					{#if !centerOptions}
					<div class="optionsScroller overflow-auto flex flex-col items-left space-y-1">
						{#each options as option}
							<li>
								<div class="flex flex-row">
									<button onclick={() => {selectOption(option.value);}}>
										{option.value}
									</button>
									{#if option.showTooltip}
										<div class="optionLabel">{option.tooltip}</div>
									{/if}
								</div>
							</li>
						{/each}
					</div>
					{/if}
				</ul>
			</div>
		</div>
	</div>
</div>
-->

<style>
	.optionsLabel {
		text-transform: uppercase;
	}
	.optionPopup {
		z-index: 100;
		border-radius: 10px;
		position: fixed;
		width: 320px;
		height: 200px;
		top: 50%;
		left: 50%;
		margin-top: -100px; /* Negative half of height. */
		margin-left: -160px; /* Negative half of width. */
		background-color: var(--color-accent-light);
	}
	.optionsScroller {
		z-index: 101;
		width: 300px;
		height: 160px;
		padding: 10px;
		margin-left: 10px;
	}
	.optionLabel {
		z-index: 101;
		font-size: 1.0em;
		margin-left: 4px;
		margin-top: 4px;
	}
	.closeButton {
		z-index: 101;
		position: fixed;
		top: 50%;
		left: 50%;
		margin-top: -95px;
		margin-left: 123px;
	}
</style>
