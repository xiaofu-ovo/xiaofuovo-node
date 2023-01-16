ssh root@47.101.206.163 << sh
rm -rf node
sh

rsync -av -e ssh --exclude=node_modules/ --exclude='.*' ../xiaofuovo-node root@47.101.206.163:/root/

ssh root@47.101.206.163 << sh
mv xiaofuovo-node node
cd node
npm install
pm2 reload src/index.js
sh