# GUESS JSON MAPPING CODE

## GOAL

The goal of this library is to produce (groovy) code to map two JSON (source -> target).
The strating points are the source and the target JSON and want to get the code to transform the source to the target.

## ROADMAP

The items order in sublists are not meaningful.

- [x] simple json mapping : no array, strict equal (no substring), ...
- [x] add tests
    - [x] guestMapingRules()
    - [] findPath()
    - [] generateMappingCode()
- [-] add CD/CI
- [] add linter and prettier
- [] be sure to have a nice workflow and good tools for publishing, testing and documentation
- [] add UI
    - [] simple version : no linter for json, no code formatting, etc
    - [] add beautiffier for json inputs
    - [] add code formatting for generated code
    - [] visual mode of the mapping (arrows to represent the mapping, etc)
- add documentation and test cases to support the roadmap
- [] improve algorithm, to handle
    - [] arrays
    - [] substring
    - [] concat
    - [] multiple matches
    - [] date format conversion
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
