;(function bootstrap() {
  document.addEventListener("DOMContentLoaded", () => {
    setupGenerateButtonListener()
  })

  function setupGenerateButtonListener() {
    document
      .querySelector("#generate-button")
      .addEventListener("click", function() {
        const mappingRules = window.guessMapingRules(
          JSON.parse(getSourceInput().value),
          JSON.parse(getTargetInput().value)
        )
        const formatedMappingRules = JSON.stringify(mappingRules, null, 4)
        const sourceCode = window.generateMappingCode(formatedMappingRules)
        getSourceCodeNode().textContent = sourceCode
        window.Prism.highlightElement(getSourceCodeNode())
      })
  }

  function getSourceInput() {
    return document.querySelector("#source-input")
  }

  function getTargetInput() {
    return document.querySelector("#target-input")
  }

  function getSourceCodeNode() {
    return document.querySelector("#source-code")
  }
})()
