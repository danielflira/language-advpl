debugger;

atom.workspace.observeTextEditors (editor) ->
  if editor.getGrammar().scopeName == 'source.advpl'
    editor.setEncoding("Windows1252");
