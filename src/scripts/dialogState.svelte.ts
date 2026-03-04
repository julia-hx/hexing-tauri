export class DialogState {
	activeDialogId:string;
	closeActiveDialog:Function;

	constructor()
	{
		this.activeDialogId = "NONE";
		this.closeActiveDialog = () => {};
	}

	reset(): void {
		this.closeActiveDialog();
		this.activeDialogId = "NONE";
		this.closeActiveDialog = () => {};
	}
}
export const dialogState = $state(new DialogState());
