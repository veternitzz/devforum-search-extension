const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "devforum-search" is now active!');

	const disposable = vscode.commands.registerCommand('devforum-search.search-devforum', function () {

		vscode.window.showInformationMessage('Hello World from Devforum Search!');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
