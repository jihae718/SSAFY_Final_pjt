# TMDB --> DB

### dump

```
$ mkdir tmdb/fixtures
$ python -Xutf8 manage.py dumpdata tmdb --indent 4 > ./tmdb/fixtures/tmdb.json
```

### load
```
$ python manage.py loaddata tmdb.json
```
