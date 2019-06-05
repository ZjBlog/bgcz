FROM node:8-alpine

LABEL "com.github.actions.name"="deploy"
LABEL "com.github.actions.description"="deploy"
LABEL "com.github.actions.icon"="tag"
LABEL "com.github.actions.color"="yellow"

LABEL "repository"="https://github.com/ZjBlog/actions.git"
LABEL "homepage"="https://zjblog.github.io/"
LABEL "maintainer"="13552960783@163.com"
RUN apk add --no-cache git
ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
