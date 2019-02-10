workflow "CI" {
  on = "push"
  resolves = [
    "run npm start",
    "run prettier check",
    "report code coverage to Coveralls",
    "report mutation testing score",
    "vulnerabilities check"
  ]
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
  secrets = ["COVERALLS_REPO_TOKEN"]
  env = {
    COVERALLS_SERVICE_NAME = "Github Actions main.workflow"
  }
}

action "run npm start" {
  needs = "run npm test"
  uses = "actions/npm@master"
  args = "start"
}

action "report mutation testing score" {
  uses = "actions/npm@master"
  needs = ["run npm test"]
  args = "run test:mutate"
  secrets = ["STRYKER_DASHBOARD_API_KEY"]
  env = {
    TRAVIS_PULL_REQUEST = "false"
    TRAVIS_BRANCH = "\"${GITHUB_REF}\""
    TRAVIS_REPO_SLUG = "\"${GITHUB_REPOSITORY}\""
    HAS_JOSH_K_SEAL_OF_APPROVAL = "true"
  }
}

action "vulnerabilities check" {
  uses = "actions/npm@master"
  needs = ["install deps"]
  args = "run test:vulnerabilities"
  secrets = ["SNYK_TOKEN"]
}
