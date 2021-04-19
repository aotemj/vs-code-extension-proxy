// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vs-extension-todos" is now active!');

	let disposable = vscode.commands.registerCommand('vs-extension-todos.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vs-extension-todos!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
