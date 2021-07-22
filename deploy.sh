#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf dist &&

# 生成文档静态文件
yarn build &&

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init &&
git add . &&
git commit -m 'update docs' &&
git branch -M master &&
git remote add origin git@github.com:FredaFei/amazing-ui-vue3.git &&
git push -f -u origin master &&

# 切换到根目录
cd -
echo https://github.com/FredaFei/amazing-ui-vue3/