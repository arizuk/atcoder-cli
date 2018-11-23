#!/bin/bash

set -e
mkdir -p dist
npm pack
mv atcoder-*.tgz dist/
npm install -g $(ls dist/atcoder-*.tgz|first)