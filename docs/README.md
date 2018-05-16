### odcinek.github.io

```
source /home/odcinek/.rvm/scripts/rvm
rvm use
bundle install --path=.bundle --clean --binstubs=.sbin
bundle exec jekyll build -V --trace --destination docs/
bundle exec jekyll serve --destination docs/
```
