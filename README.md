# GUESS JSON MAPPING CODE

[![Build Status](https://travis-ci.com/Benoit-Vasseur/guess_json_mapping_code.svg?branch=master)](https://travis-ci.com/Benoit-Vasseur/guess_json_mapping_code)

## GOAL

The goal of this library is to produce (Javascript / groovy) code to map two JSON (source -> target).
The strating points are the source and the target JSONs and we want to get the code to produce the target from the source.

## Main use case : data migration

You have two systems A and B and have some duplicated data (at least one).
So the same data is represented in the two data structures (A and B).
The library and the UI will help you to write a migration script and the duplicates will be your starting points.

## Documentation

The starting points of the library (guessMapingRules()) are two json : a source and a target.
And the end result is a generated source code that, if run, will produce the json target from the json source .

Here an example on how the library works : https://repl.it/@Benoit_Vasseur/guessjsonmapping

And bellow the same example explained :
So if the source is :

```json
{
  "p": {
    "firstname": "Benoit"
  },
  "lastname": "Vasseur"
}
```

And the target :

```json
{
  "personne": {
    "firstName": "Benoit",
    "lastName": "Vasseur"
  }
}
```

The generated (JavaScript) source code is :

```js
var target = {
  personne: {
    firstName: source.p.firstname,
    lastName: source.lastname
  }
}
```

The Groovy code is :

```groovy
target = [
    "personne": [
        "firstName": source.p.firstname,
        "lastName": source.lastname
    ]
]
```

Here is a running example that use the generated Groovy code : https://jdoodle.com/a/XkJ

### intermediate data structure : mappingRules

To generate the source code, there is one intermediate data structure : mappingRules, that represents the mapping target <- source.

```json
{
  "personne": {
    "firstName": ".p.firstname",
    "lastName": ".lastname"
  }
}
```

This representation (target form) may change in the future. I doubt that is it well suited for more complex relation than pure equality.

Here are the others possibilty that I have in mind for now :

- For the stucture itself, a flat struct (array or object) may be better to express the relation between data :
- To describe more complexe relation
    - try a LISP like pseudo language, here some ideas :

```js
const source = {
    name: "Benoit Vasseur"
}

const target: {
    firstName: "Benoit",
    lastName: "Vasseur"
}

// the representation of the relation with a pseudo LISP lang (a la clojure)
// $0 to represent the source obj

const mappingRules = {
    firstName: ["NTH", ["SPLIT", "$0.name", " "], 0],
    lastName: ["NTH", ["SPLIT", "$0.name", " "], 1]
}

// implict "pipe"

const mappingRules2 = {
    firstName: [["SPLIT", "$0.name", " "], /* >> */ ["NTH", 0]],
    lastName: [["SPLIT", "$0.name", " "], /* >> */ ["NTH", 1]]
}

// or with a flat struct
const mappingRules3 = [
    /*
    {
        "path in target":[
            1: "path in source",
            2: operation on 1,
            3: operation on 2,
            etc
        ]
    } */
    {
        ".firstname":[
            ".name",
            [SPLIT, ""],
            [NTH, 0]
        ]
    }
]

```

For now, the last one (mappingRules3) seems nicer to me but I could not "justify" it. We will see shortly how it ends, when I will work on the substring detection !

## ROADMAP

The order of the items in sublists are not meaningful for the priority.

- [x] simple json mapping : no array, strict equal (no substring), ...
- [x] unit tests
  - [x] guessMapingRules()
  - [] findPath()
  - [] generateMappingCode()
- [-] integration tests
  - [x] code generation for Javascript
  - [] code generation for Groovy
- [x] add CD/CI
- [x] add linter and prettier
- [-] be sure to have a nice workflow and good tools for :
  - [x] publishing source
  - [x] testing
  - [-] documentation : for now I just use markdown in github but want to test some stuff (generate doc from test -> living documentation, gatsby, jsDoc / typescript, github pages, ...)
- [x] add basic UI
  - [x] simple version : no linter for json, no code formatting, etc
  - [x] add beautiffier for json inputs
  - [x] add code formatting for generated code
- [] add documentation and test cases to support the roadmap. Especially add red tests to show where you want to go and what is not implemented yet
- [] improve algorithm, to handle
  - [] arrays
  - [] substring
  - [] concat
  - [] multiple matches
  - [] date format conversion
- UI ++
- [] can make a choice if multiple solutions are returned
- [] visual mode of the mapping (arrows to represent the mapping, etc)
- [] open for extension to support other languages

## workflow and contribution

### Tools

Tools used to have style consistency (and try to check some best practises) :

- prettier : `npm run format`
- eslint : `npm run lint`

### Spirit

- No specific workflow should be forced during coding on local (no git hooks, etc).
- Travis will complain if : tests or linting rules are failing
- If a branch/PR is red, it is not merged into master
- feature branch

I do not want to borrow the potential contributor during his dev process. So I do not want to force other to use prettier and eslint during local coding. Travis will complain if the rules are broken, and I think it is enough.
So if the dev want to use prettier and eslint during his coding process, the tools are here (npm scripts and config files).
So it is just only before the PR that prettier and eslint have to be green (if you want a merge).
