<script lang="ts">
	import { AccentColor } from '../../globals.svelte';
	import { _setAccentColor } from './+page';
</script>

<div class="flex justify-center items-center flex-col">
	<div class="text-3xl font-sans flex flex-row">
		settings
	</div>

	<p class="mt-2 mb-4">
		User configuration for this app.
	</p>

	<div class="text-2xl font-sans flex flex-row">
		accent color
	</div>

	<div class="flex flex-row items-center space-x-2 mt-2">
		<button 
			class="accent-color-btn size-6 violet" 
			title="violet" 
			onclick={() => { _setAccentColor(AccentColor.Violet); }}>
		</button>
		<button
			class="accent-color-btn size-6 fuchsia" 
			title="fuchsia" 
			onclick={() => { _setAccentColor(AccentColor.Fuchsia); }}>
		</button>
		<button 
			class="accent-color-btn size-6 rose" 
			title="rose" 
			onclick={() => { _setAccentColor(AccentColor.Rose); }}>
		</button>
		<button 
			class="accent-color-btn size-6 amber" 
			title="amber" 
			onclick={() => { _setAccentColor(AccentColor.Amber); }}>
		</button>
		<button 
			class="accent-color-btn size-6 green" 
			title="green" 
			onclick={() => { _setAccentColor(AccentColor.Green); }}>
		</button>
		<button 
			class="accent-color-btn size-6 sky" 
			title="sky" 
			onclick={() => { _setAccentColor(AccentColor.Sky); }}>
		</button>
		<button 
			class="accent-color-btn size-6 indigo" 
			title="indigo" 
			onclick={() => { _setAccentColor(AccentColor.Indigo); }}>
		</button>
	</div>
</div>

<style>
	@import "tailwindcss";
	@custom-variant dark (&:where(.dark, .dark *));

	.accent-color-btn {
		border-radius: 20px;
	}
	.accent-color-btn:hover {
		outline: solid;
	}
</style>