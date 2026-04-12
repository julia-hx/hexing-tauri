<script>
	import IconSmall from "./IconSmall.svelte";
	import { IconType } from "../scripts/globals.svelte.js";
</script>

<div class="flex flex-row justify-center items-center space-x-1 mt-0.5 text-sm text-gray-400 dark:text-gray-500">
	<span>made with</span> 
	<IconSmall type={IconType.Heart}/> 
	<span>by <a href="https://linktr.ee/julia.hx" target="_blank">julia.hx</a></span>
</div>
