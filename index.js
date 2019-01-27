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

function guestMapingRules(source, target, mappingRules = {}) {
  Object.entries(target).forEach(([key, value]) => {
    if (typeof value === "object") {
      mappingRules[key] = guestMapingRules(source, value, mappingRules[key]);
    } else {
      return (mappingRules[key] = findPath(value, source));
    }
  });
  return mappingRules;
}

function findPath(value, source, path = "") {
  let r = undefined;
  Object.entries(source).forEach(([key, v]) => {
    if (typeof v === "object") {
      r = findPath(value, v, `${path}.${key}`);
    } else {
      if (value === v) {
        r = `${path}.${key}`;
      }
    }
  });
  return r;
}

function generateMappingCode(mappingRules) {
  return `
target = ${mappingRules
          .replace(new RegExp('"\\.', "g"), "source.")
          .replace(new RegExp('",', "g"), ",")
          .replace(/"\n/g, "\n")}
    `;
}

const mappingRules = guestMapingRules(source, target);

console.log("---- SOURCE ----");
console.log(JSON.stringify(source, null, 4));

console.log("---- TARGET ----");
console.log(JSON.stringify(target, null, 4));

console.log("---- MAPPING RULES ----");
const formatedMappingRules = JSON.stringify(mappingRules, null, 4);
console.log(formatedMappingRules);

console.log(generateMappingCode(formatedMappingRules));
