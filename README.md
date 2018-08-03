### odcinek.github.io

```
git clone git@github.com:odcinek/odcinek.git odcinek.github.io
cd odcinek.github.io/
source ~/.rvm/scripts/rvm
rvm use
bundle install --path=.bundle --clean --binstubs=.sbin
```

Run
```
bundle exec jekyll serve --destination docs/
```

Build
```
JEKYLL_ENV=production bundle exec jekyll build -V --trace --destination docs/
git add . && git commit -m"Initial commit" && git push
```
