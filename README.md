### odcinek.github.io

```
gir clone git@github.com:odcinek/odcinek.git odcinek.github.io
cd odcinek.github.io/
source ~/.rvm/scripts/rvm
rvm use
bundle install --path=.bundle --clean --binstubs=.sbin
bundle exec jekyll build -V --trace --destination docs/
bundle exec jekyll serve --destination docs/
```
