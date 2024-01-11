#!/bin/bash

# 1. Create dist directory
rm -rf dist && mkdir dist;

# 2. Copy necessary files to the release directory
cp src/index.js src/preset.js package.json LICENSE README.md CONTRIBUTING.md dist;