// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { SidebarProvider } from "./SidebarProvider";

export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "vs-extension-todos" is now active!');

    const sidebarProvider = new SidebarProvider(context.extensionUri);

    const item = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Right
    );
    item.text = "$(beaker) Add Todo";
    item.command = "vs-extension-todos.addTodo";
    item.show();

    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider("vs-extension-proxy-sidebar", sidebarProvider)
    );


    // context.subscriptions.push(disposable);
}

export function deactivate() {
}
