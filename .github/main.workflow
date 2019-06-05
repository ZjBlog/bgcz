workflow "New workflow" {
  on = "push"
  resolves = ["message"]
}

action "message" {
  uses = "ZjBlog/message@master"
  secrets = ["URL"]
  env = {
    MESSAGE = "小主部署完成"
  }
}
