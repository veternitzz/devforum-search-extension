const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// lets register our search command
	const disposable = vscode.commands.registerCommand('devforum-search.search-devforum', async function () {
		// capture the input from the user so we know what to search for
		const input = await vscode.window.showInputBox({placeHolder: 'Search the devforum'});

		// if the user left an empty string then return
		if (input === ''){return}

		// if the user didn't hit esc
		if (input !== undefined){
			const url = `https://devforum.roblox.com/search?expanded=false&q=${input}` // define url
			vscode.window.showInformationMessage("Opening in an external browser") // let the user know we're trying to open in an external browser
			vscode.env.openExternal(vscode.Uri.parse(url)) // open in an external browser
		}
	});

	// lets now register a command which sends them to the github repo
	const disposable2 = vscode.commands.registerCommand('devforum-search.view-github', function(){
		const url = `https://github.com/veternitzz/devforum-search-extension` // define url
		vscode.env.openExternal(url) // open in an external browser
	})

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
