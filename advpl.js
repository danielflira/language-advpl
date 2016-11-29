
atom.workspace.observeTextEditors(function(editor) {

  // verificar se o arquivos abertos em advpl e altera encode inicial
  if (editor.getGrammar().scopeName === 'source.advpl') {
    editor.setEncoding("Windows1252");

    // marca alteracao de encode apenas para abertura
    var first = true;

    // coloca um handler, porque o atom vai mudar para o encode padrao
    // vou altera novamente apenas a primeira vez
    editor.onDidChangeEncoding(function() {
        if (first) {
          editor.setEncoding("Windows1252");
          first = false;
        }
    });

  }
});
