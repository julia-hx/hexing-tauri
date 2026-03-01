<script lang="ts">
	import type { PageProps } from './$types';
	import { LazyStore } from '@tauri-apps/plugin-store';
	import { AccentColor, accentColor } from '../../globals.svelte';

	async function setAccentColor(color : AccentColor) {
		accentColor.color = color;
	}
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
			onclick={() => { setAccentColor(AccentColor.Violet); }}>
		</button>
		<button 
			class="accent-color-btn size-6 fuchsia" 
			title="fuchsia" 
			onclick={() => { setAccentColor(AccentColor.Fuchsia); }}>
		</button>
		<button 
			class="accent-color-btn size-6 rose" 
			title="rose" 
			onclick={() => { setAccentColor(AccentColor.Rose); }}>
		</button>
		<button 
			class="accent-color-btn size-6 amber" 
			title="amber" 
			onclick={() => { setAccentColor(AccentColor.Amber); }}>
		</button>
		<button 
			class="accent-color-btn size-6 green" 
			title="green" 
			onclick={() => { setAccentColor(AccentColor.Green); }}>
		</button>
		<button 
			class="accent-color-btn size-6 sky" 
			title="sky" 
			onclick={() => { setAccentColor(AccentColor.Sky); }}>
		</button>
		<button 
			class="accent-color-btn size-6 indigo" 
			title="indigo" 
			onclick={() => { setAccentColor(AccentColor.Indigo); }}>
		</button>
	</div>
</div>

<style>
	@import "tailwindcss";
	@custom-variant dark (&:where(.dark, .dark *));

	.accent-color-btn {
		border-radius: 20px;
	}
	.violet {
		background-color: theme(--color-violet-500);
	}
	.fuchsia {
		background-color: theme(--color-fuchsia-500);
	}
	.rose {
		background-color: theme(--color-rose-500);
	}
	.amber {
		background-color: theme(--color-amber-500);
	}
	.green {
		background-color: theme(--color-green-500);
	}
	.sky {
		background-color: theme(--color-sky-500);
	}
	.indigo {
		background-color: theme(--color-indigo-500);
	}
	.accent-color-btn:hover {
		outline: solid;
	}
</style>