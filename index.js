function guessMapingRules(source, target, mappingRules = {}) {
  Object.entries(target).forEach(([key, value]) => {
    if (typeof value === "object") {
      mappingRules[key] = guessMapingRules(source, value, mappingRules[key])
    } else {
      return (mappingRules[key] = findPath(value, source))
    }
  })
  return mappingRules
}

function findPath(value, source, path = "") {
  let r
  Object.entries(source).forEach(([key, v]) => {
    if (typeof v === "object") {
      r = findPath(value, v, `${path}.${key}`)
    } else {
      if (value === v) {
        r = `${path}.${key}`
      }
    }
  })
  return r
}

function generateMappingCode(mappingRules, isGroovy) {
  let sourceCode = `
target = ${mappingRules
    .replace(new RegExp('"\\.', "g"), "source.")
    .replace(new RegExp('",', "g"), ",")
    .replace(/"\n/g, "\n")}
    `
  return isGroovy
    ? sourceCode.replace(/\{/g, "[").replace(/\}/g, "]")
    : sourceCode
}

module.exports = {
  guessMapingRules,
  findPath,
  generateMappingCode
}
