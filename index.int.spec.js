const { guessMapingRules, generateMappingCode } = require("./index")

describe("Integration tests", () => {
  test("simple JSON", () => {
    const mySource = {
      p: {
        firstname: "Benoit"
      },
      lastname: "Vasseur"
    }

    const myTarget = {
      personne: {
        firstName: "Benoit",
        lastName: "Vasseur"
      }
    }

    const mappingRules = guessMapingRules(mySource, myTarget)
    const formatedMappingRules = JSON.stringify(mappingRules, null, 4)
    const sourceCode = generateMappingCode(formatedMappingRules)
    let target
    // eslint-disable-next-line no-unused-vars
    const source = mySource

    // eslint-disable-next-line no-eval
    eval(sourceCode)

    expect(target).toEqual(myTarget)
  })
})
