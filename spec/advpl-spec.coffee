describe "AdvPL grammar", ->
  grammar = null

  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage("language-advpl")

    runs ->
      grammar = atom.grammars.grammarForScopeName("source.advpl")

  it "parses the grammar", ->
    expect(grammar).toBeTruthy()
    expect(grammar.scopeName).toBe "source.advpl"
