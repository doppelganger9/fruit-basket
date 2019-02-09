# Fruit Basket Kata

This is a NodeJS implementation of a fruit basket order Kata.

## Install & Run

- git clone this repo
- npm install
- npm test
- npm start

## Requirements

We are a national supermarket chain that is interested in starting to use special offers in our stores.
We stock the following products:

| Item          | Price (£) |
|:-------------:|:---------:|
| Apple 🍎      |   0.20    |
| Orange 🍊     |   0.50    |
| Watermelon 🍉 |   0.80    |

We would like to allow the following special offers:

- Buy One Get One Free on Apples
- Three For The Price Of Two on Watermelons

We would like to see the output for an example basket containing the following items:

|    Item    | Quantity |
|:----------:|:--------:|
| Apple      |    4     |
| Orange     |    3     |
| Watermelon |    5     |

### Notes

- There is no requirements for any user interface - a command-line program is fine
- You can use any programming language that you like

## Highlights

- Used Test-Driven development;
- Used Strategy Pattern for the discounts, etc.;
- Did have to refactor midway through because I did not understood "Buy 1 Get 1 Free" correctly, but it was easy with the existing 100% code coverage and good architecture given as a bonus of doing TDD;
- Used Jest as a test runner;
- made it in less than 2 hours.
- Maybe I should have given the total discount instead of the total resulting price to enable the UI to give more insights to the end-user, but it can be quickly added given the architecture & code-coverage: refactoring or adding features is easy and safe!

## Next Steps

This is a finished project, but I will continue to play around to test Github Actions to setup a CI/CD to build, test, and report code coverage. Adding a few README badges along the way.

Added a CI Github Actions.