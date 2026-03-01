import type { PageLoad } from './$types';
import { LazyStore } from '@tauri-apps/plugin-store';

export const load: PageLoad = ({ params }) => {
	console.log("...loading settings...");
	let store = new LazyStore('settings.json')
	
};
