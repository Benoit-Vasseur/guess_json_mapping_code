const { guessMapingRules, generateMappingCode } = require("./index")

describe("Integration tests", () => {
  test("simple JSON", () => {
    const mySource = {
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

    const myTarget = {
      personne: {
        firstName: "Benoit",
        lastName: "Vasseur",
        nationality: "French",
        birthdate: "14/10/1991",
        current_work_type: "developer",
        current_work_place: "Modulus Data; Levis, QC, Canada"
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
