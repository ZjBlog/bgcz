#!/bin/sh -l
echo '👍 ENTRYPOINT HAS STARTED—INSTALLING THE GEM BUNDLE'
yarn && npm run test
echo '👍 GREAT SUCCESS!'