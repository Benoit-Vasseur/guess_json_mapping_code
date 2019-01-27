const { guestMapingRules, generateMappingCode } = require("./index");

const source = {
  firstName: "Benoit",
  p: {
    firstName: "Benoit"
  },
  lastName: "Vasseur"
};

const target = {
  personne: {
    prenom: "Benoit",
    nom: "Vasseur"
  }
};

console.log("---- SOURCE ----");
console.log(JSON.stringify(source, null, 4));

console.log("---- TARGET ----");
console.log(JSON.stringify(target, null, 4));

console.log("---- MAPPING RULES ----");
const mappingRules = guestMapingRules(source, target);
const formatedMappingRules = JSON.stringify(mappingRules, null, 4);
console.log(formatedMappingRules);

console.log(generateMappingCode(formatedMappingRules));

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
