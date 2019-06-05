FROM node:8-alpine

LABEL "com.github.actions.name"="node-test-8"
LABEL "com.github.actions.description"="node-test-8"
LABEL "com.github.actions.icon"="tag"
LABEL "com.github.actions.color"="yellow"

LABEL "repository"="https://github.com/ZjBlog/ZjBlog.github.io.git"
LABEL "homepage"="https://zjblog.github.io/"
LABEL "maintainer"="13552960783@163.com"

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
