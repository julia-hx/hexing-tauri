<script>
	import { Window } from "@tauri-apps/api/window";
	import { Webview } from "@tauri-apps/api/webview";
	import { WebviewWindow } from "@tauri-apps/api/webviewWindow";
	import IconButton from "./IconButton.svelte";
	import { IconType } from "../globals.svelte";
	import { invoke } from "@tauri-apps/api/core";

	async function open() {
		// new webview window without context!
		// await invoke("create_window");

		/* does nothing?
		const webview = new WebviewWindow('my-label', {
			url: 'https://github.com/tauri-apps/tauri'
		});
		webview.once('tauri://created', function () {
			// webview successfully created
			webview.show();
		});
		webview.once('tauri://error', function (e) {
			// an error happened creating the webview
		});
		*/

		const appWindow = new Window("examples");

		appWindow.once("tauri://created", async function () {
			// `new Webview` Should be called after the window is successfully created,
			// or webview may not be attached to the window since window is not created yet.

			// loading embedded asset:
			const webview = new Webview(appWindow, "hi_examples", {
				url: "./examples",

				// create a webview with specific logical position and size
				x: 0,
				y: 0,
				width: 800,
				height: 600,
			});

			webview.once("tauri://created", function () {
				// webview successfully created
				
			});
			webview.once("tauri://error", function (e) {
				// an error happened creating the webview
			});

			// emit an event to the backend
			await webview.emit("some-event", "data");
			// listen to an event from the backend
			const unlisten = await webview.listen("event-name", (e) => {});
			unlisten();
		});
	}
</script>

<IconButton
	iconType={IconType.Window}
	onClick={() => {
		open();
	}}
/>

<style>
</style>
