# Fruit Basket Kata - 🍎🍊🍉🛒💷🥋

[![CI Build Status](https://github.com/doppelganger9/fruit-basket/actions/workflows/push.yml/badge.svg)](https://github.com/doppelganger9/fruit-basket/actions) [![Scheduled Build Status](https://github.com/doppelganger9/fruit-basket/actions/workflows/scheduled.yml/badge.svg)](https://github.com/doppelganger9/fruit-basket/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/afb1121a42a57c4e172b/maintainability)](https://codeclimate.com/github/doppelganger9/fruit-basket/maintainability) [![BCH compliance](https://bettercodehub.com/edge/badge/doppelganger9/fruit-basket?branch=master)](https://bettercodehub.com/) [![Coverage Status](https://coveralls.io/repos/github/doppelganger9/fruit-basket/badge.svg?branch=master)](https://coveralls.io/github/doppelganger9/fruit-basket?branch=master) [![Mutation testing badge](https://badge.stryker-mutator.io/github.com/doppelganger9/fruit-basket/master)](https://stryker-mutator.github.io) [![Known Vulnerabilities](https://snyk.io/test/github/doppelganger9/fruit-basket/badge.svg?targetFile=package.json)](https://snyk.io/test/github/doppelganger9/fruit-basket?targetFile=package.json) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=doppelganger9_fruit-basket&metric=alert_status)](https://sonarcloud.io/dashboard?id=doppelganger9_fruit-basket)

This is a NodeJS implementation of a fruit basket order Kata.

## Install & Run

- git clone this repo
- npm install
- npm test
- npm start

## Requirements

We are a national supermarket chain that is interested in starting to use special offers in our stores.
We stock the following products:

| Item          | Price (💷 £) |
|:-------------:|:------------:|
| 🍎 Apple      |     0.20     |
| 🍊 Orange     |     0.50     |
| 🍉 Watermelon |     0.80     |

We would like to allow the following special offers:

- Buy One Get One Free on Apples
- Three For The Price Of Two on Watermelons

We would like to see the output for an example basket 🛒 containing the following items:

|    Item       | Quantity |
|:-------------:|:--------:|
| 🍎 Apple      |    4     |
| 🍊 Orange     |    3     |
| 🍉 Watermelon |    5     |

### Notes

- There is no requirements for any user interface - a command-line program is fine
- You can use any programming language that you like

## Highlights

- Applied *Test-Driven Development*;
- Used *Strategy Pattern* for the discounts, etc.;
- Did have to refactor midway through because I did not understood "Buy 1 Get 1 Free" correctly, but it was easy with the existing 100% code coverage and good architecture given as a bonus of doing TDD;
- Used [Jest](https://jestjs.io/) as a test runner;
- made it in less than 2 hours.
- Maybe I should have given the total discount instead of the total resulting price to enable the UI to give more insights to the end-user, but it can be quickly added given the architecture & code-coverage: refactoring or adding features is easy and safe!

## Next Steps

This is a finished project, but I did continue to play around to test Github Actions to setup a CI/CD to build, test, and report code coverage.

Also added a few README badges along the way.

- ~~Added a [Travis CI](https://travis-ci.org) build (install, test, etc.) see `.travis.yml` file~~ CI replaced with Github Actions
- with code coverage reporting via [Coveralls](https://coveralls.io)
- and dependency vulnerability analysis via [Snyk](https://snyk.io)
- and code quality analysis via [Code Climate](https://codeclimate.com)
- mutation testing with [Stryker](https://stryker-mutator.io), which helped me refine tests and unused code.

Also, to compare with I added a Github Actions Workflow that almost does the same (see `.github/main.workflow` file):

- install
- test
- start
- check prettier
- report code coverage

(Still missing the Code Climate integration)

## LICENSE

See LICENSE
