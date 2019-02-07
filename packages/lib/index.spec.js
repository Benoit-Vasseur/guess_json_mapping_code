const { guessMapingRules } = require("./index")

describe("guestMapingRules", () => {
  test("simple json", () => {
    const source = {
      p: {
        firstname: "Benoit"
      },
      lastname: "Vasseur"
    }

    const target = {
      personne: {
        firstName: "Benoit",
        lastName: "Vasseur"
      }
    }

    const mappingRules = guessMapingRules(source, target)

    expect(mappingRules).toEqual({
      personne: {
        firstName: ".p.firstname",
        lastName: ".lastname"
      }
    })
  })
})
