#!/bin/bash

# 1. Version the release
npm run release.version;

# 2. Prepare release
npm run release.prepare;

# 3. Publish to NPM
npm run release.publish;