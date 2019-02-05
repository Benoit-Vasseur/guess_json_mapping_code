;(function bootstrap() {
  document.addEventListener("DOMContentLoaded", () => {
    // create the editors
    var sourceContainer = document.querySelector("#source-jsoneditor")
    var options = { mode: "code" }
    const source = {
      p: {
        firstname: "Benoit",
        lastname: "Vasseur"
      },
      others_data: {
        birthdate: "14/10/1991",
        nationality: "French"
      },
      current_work: {
        type: "developer",
        where: "Modulus Data; Levis, QC, Canada"
      }
    }
    var sourceEditor = new window.JSONEditor(sourceContainer, options, source)

    var targetContainer = document.querySelector("#target-jsoneditor")
    const target = {
      personne: {
        firstName: "Benoit",
        lastName: "Vasseur",
        nationality: "French",
        birthdate: "14/10/1991",
        current_work_type: "developer",
        current_work_place: "Modulus Data; Levis, QC, Canada"
      }
    }
    var targetEditor = new window.JSONEditor(targetContainer, options, target)

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
