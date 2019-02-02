const { guessMapingRules, generateMappingCode } = require("./index")

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

console.log("---- SOURCE ----")
console.log(JSON.stringify(source, null, 4))

console.log("---- TARGET ----")
console.log(JSON.stringify(target, null, 4))

console.log("---- MAPPING RULES ----")
const mappingRules = guessMapingRules(source, target)
const formatedMappingRules = JSON.stringify(mappingRules, null, 4)
console.log(formatedMappingRules)

console.log(generateMappingCode(formatedMappingRules))

/*

const mappingRulesEx = {
  personne: {
    prenom: "$SOURCE.firstName",
    nom: "$SOURCE.lastName"
  }
};

function MappingCode(source) {
  target = {};
  target.personne = {};
  target.personne.prenom = source.firstName;
  target.personne.nom = source.lastName;
}
*/
