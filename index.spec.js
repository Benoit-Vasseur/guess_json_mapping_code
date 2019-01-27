const { guestMapingRules } = require("./index")

describe("guestMapingRules", () => {
  test("simple json", () => {
    const source = {
      p: {
        firstName: "Benoit"
      },
      lastName: "Vasseur"
    }

    const target = {
      personne: {
        prenom: "Benoit",
        nom: "Vasseur"
      }
    }

    const mappingRules = guestMapingRules(source, target)

    expect(mappingRules).toEqual({
      personne: {
        prenom: ".p.firstName",
        nom: ".lastName"
      }
    })
  })
})
