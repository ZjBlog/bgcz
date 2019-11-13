#!/bin/sh -l
echo '👍 开始编译并部署'
yarn && npm run docs:build &&
echo '👍 编译完成' &&
cd docs/.vuepress/dist
remote_repo="https://${TOKENACTION}@github.com/${REPO}.git" && \
remote_branch="dev" && \
echo '路径'+ $remote_repo && \
git init && \
git config --global user.email "zhangjun521ly@qq.com" && \
git config --global user.name  "bgcz" && \
# git config user.name "${GITHUB_ACTOR}" && \
# git config user.email "${GITHUB_ACTOR}@users.noreply.github.com" && \
git add --all && \
#echo -n 'Files to Commit:' && ls -l | wc -l && \
git commit -m 'action build' && \
# git remote add origin https://github.com/ZjBlog/actions.git \
git push --force $remote_repo master:$remote_branch && \
rm -fr .git && \
echo '👍 部署完成!'
