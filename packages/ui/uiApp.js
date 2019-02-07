// If we "sync" import it put all the content in one big file
// For demo purpose we load the vendors with import() to keep separated files
/*
import JSONEditor from "./vendors/jsoneditor"
import Prism from "./vendors/prism" */
import { guessMapingRules, generateMappingCode } from "../lib/index"
;(async function bootstrap() {
  const [JSONEditor, Prism] = await loadVendors()

  const sourceEditor = createSourceEditor()
  const targetEditor = createTargetEditor()

  getGenerateButton().addEventListener("click", function clickOnGenerate() {
    generateSourceCode(sourceEditor, targetEditor)
  })

  function generateSourceCode(sourceEditor, targetEditor) {
    const mappingRules = guessMapingRules(
      sourceEditor.get(),
      targetEditor.get()
    )

    const formatedMappingRules = JSON.stringify(mappingRules, null, 4)
    const sourceCode = generateMappingCode(formatedMappingRules)

    getSourceCodeNode().textContent = sourceCode
    Prism.highlightElement(getSourceCodeNode())
  }

  function createSourceEditor() {
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

    return new JSONEditor(sourceContainer, options, source)
  }

  function createTargetEditor() {
    var targetContainer = document.querySelector("#target-jsoneditor")
    var options = { mode: "code" }
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
    return new JSONEditor(targetContainer, options, target)
  }

  function getGenerateButton() {
    return document.querySelector("#generate-button")
  }

  function getSourceCodeNode() {
    return document.querySelector("#source-code")
  }

  async function loadVendors() {
    return Promise.all([
      import("./vendors/jsoneditor"),
      import("./vendors/prism")
    ])
  }
})()
