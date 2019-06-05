workflow "New workflow" {
  on = "push"
  resolves = ["Message","Master"]
}

action "Master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}
action "Test" {
  uses = "./actions/node8"
  needs = ["Master"]
}
action "CreateIssue" {
  uses = "ZjBlog/create-issue-by-lables@master"
  needs = ["Test"]
  secrets = ["GITHUB_TOKEN"]
  args = "issues.json"
}

action "Deploy" {
  uses = "./actions/deploy"
  needs = ["CreateIssue"]
  env = {
    REPO = "bgcz/bgcz.github.io"
  }
  secrets = ["TOKENACTION"]
}
action "Message" {
  uses = "ZjBlog/message@master"
  needs = ["Deploy"]
  secrets = ["URL"]
  env = {
    MESSAGE = "w成"
  }
}
