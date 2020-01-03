# hello-puppeteer

## Usage
~~~sh
make -f docker.mk help
make -f docker.mk install
docker-compose run --rm node src/example.js
docker-compose run --rm --no-deps -T node src/google-terms.js | jq
~~~
