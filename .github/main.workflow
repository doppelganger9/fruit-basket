workflow "CI" {
  on = "push"
  resolves = ["run npm start", "run npm test", "run prettier check", "report code coverage to Coveralls"]
}

action "install deps" {
  uses = "actions/npm@master"
  args = "ci"
}

action "run npm test" {
  needs = "install deps"
  uses = "actions/npm@master"
  args = "test"
}

action "run prettier check" {
  needs = "run npm test"
  uses = "actions/npm@master"
  args = "run prettier:check"
}

action "report code coverage to Coveralls" {
  needs = "run npm test"
  uses = "actions/npm@master"
  args = "run coveralls"
}

action "run npm start" {
  needs = "run npm test"
  uses = "actions/npm@master"
  args = "start"
}
