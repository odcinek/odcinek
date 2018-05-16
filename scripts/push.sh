#!/usr/bin/env bash
./scripts/build.sh
git status
git add . -A && git commit -m "Initial commit"  && git push
