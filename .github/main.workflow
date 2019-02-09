workflow "CI" {
  on = "push"
  resolves = ["run npm start", "run npm test"]
}

action "install deps" {
  uses = "actions/npm@master"
  runs = "ci"
}

action "run npm test" {
  needs = "install deps"
  uses = "actions/npm@master"
  runs = "test"
}

action "run npm start" {
  uses = "actions/npm@master"
  runs = "start"
  needs = ["run npm test"]
}
