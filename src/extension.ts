"use strict"

import * as vscode from 'vscode'
import L4RCApiData from "./ApiData"
import { L4RCAutocomplete } from "./Autocomplete"
import { L4RCHover } from "./Hover"

const LUA_MODE = { language: "lua" }

export function activate(context: vscode.ExtensionContext) {
    let dataPath = context.asAbsolutePath("./data")
    const l4RCApiData = new L4RCApiData(dataPath)

    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider(
            LUA_MODE,
            new L4RCAutocomplete(l4RCApiData),
            '.'
        )
    )

    context.subscriptions.push(
        vscode.languages.registerHoverProvider(
            LUA_MODE,
            new L4RCHover(l4RCApiData)
        )
    )
}

// this method is called when your extension is deactivated
export function deactivate() {
}