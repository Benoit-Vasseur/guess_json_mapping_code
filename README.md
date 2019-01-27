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

- A specifiq workflow should not be forced during coding.
- Rules are here only when a merge request is made -> so we do not merge if a test is red or the coding style is not respected.

I do not want to borrow the potential contributor during his dev process. So I do not want to force to use prettier and eslint during coding. The rules are enforce only when we do merge request to master (on travis).
So if the dev want to use prttier and eslint during his coding process, the toosl are here (npm scripts and config files).
And when the contribution is finished and the merge request is made, only here travis will complain if the formatting is not correct.