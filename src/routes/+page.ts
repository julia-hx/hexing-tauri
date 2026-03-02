import type { PageLoad } from './$types';
import { _initSettings } from './settings/+page';
import { optionDialogState } from '../globals.svelte';

export const load: PageLoad = ({ params }) => {
	_initSettings();
	optionDialogState.reset();
};
