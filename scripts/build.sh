#!/usr/bin/env bash
source /home/odcinek/.rvm/scripts/rvm
rvm use
bundle install --path=.bundle --clean --binstubs=.sbin
bundle exec jekyll build -V --trace --destination docs/
