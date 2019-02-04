;(function bootstrap() {
  document.addEventListener("DOMContentLoaded", () => {
    // create the editors
    var sourceContainer = document.querySelector("#source-jsoneditor")
    var options = { mode: "code" }
    const source = {
      p: {
        firstname: "Benoit"
      },
      lastname: "Vasseur"
    }
    var sourceEditor = new JSONEditor(sourceContainer, options, source)

    var targetContainer = document.querySelector("#target-jsoneditor")
    const target = {
      personne: {
        firstName: "Benoit",
        lastName: "Vasseur"
      }
    }
    var targetEditor = new JSONEditor(targetContainer, options, target)

    setupGenerateButtonListener(sourceEditor, targetEditor)
  })

  function setupGenerateButtonListener(sourceEditor, targetEditor) {
    document
      .querySelector("#generate-button")
      .addEventListener("click", function clickOnGenerate() {
        generateSourceCode(sourceEditor, targetEditor)
      })
  }

  function generateSourceCode(sourceEditor, targetEditor) {
    const mappingRules = window.guessMapingRules(
      sourceEditor.get(),
      targetEditor.get()
    )
    const formatedMappingRules = JSON.stringify(mappingRules, null, 4)
    const sourceCode = window.generateMappingCode(formatedMappingRules)
    getSourceCodeNode().textContent = sourceCode
    window.Prism.highlightElement(getSourceCodeNode())
  }

  function getSourceCodeNode() {
    return document.querySelector("#source-code")
  }
})()
