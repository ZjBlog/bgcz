workflow "New workflow" {
  on = "push"
  resolves = ["message"]
}

action "createIssue" {
  uses = "ZjBlog/create-issue-by-lables@master"
  secrets = ["GITHUB_TOKEN"]
  args = "issues.json"
}


action "message" {
  uses = "ZjBlog/message@master"
  needs = ["createIssue"]
  secrets = ["URL"]
  env = {
    MESSAGE = "w成"
  }
}
