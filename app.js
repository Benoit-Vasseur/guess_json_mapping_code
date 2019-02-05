const { guessMapingRules, generateMappingCode } = require("./index")

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

console.log("---- SOURCE ----")
console.log(JSON.stringify(source, null, 4))

console.log("---- TARGET ----")
console.log(JSON.stringify(target, null, 4))

console.log("---- MAPPING RULES ----")
const mappingRules = guessMapingRules(source, target)
const formatedMappingRules = JSON.stringify(mappingRules, null, 4)
console.log(formatedMappingRules)

console.log(generateMappingCode(formatedMappingRules, true))

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
