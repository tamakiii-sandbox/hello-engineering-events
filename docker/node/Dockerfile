FROM alpine:3.11.2

RUN apk update && apk add --no-cache chromium && \
    rm -rf /var/cache/*

RUN mkdir -p /home/chrome && \
    adduser -D chrome && \
    chown -R chrome:chrome /home/chrome

USER chrome

# chromium-browser --no-sandbox --allow-insecure-localhost --homepage=about:blank --no-first-run --headless --disable-software-rasterizer --disable-gpu --disable-translate --disable-extensions --disable-setuid-sandbox --remote-debugging-port=9876
ENTRYPOINT [ "chromium-browser", "--no-sandbox", "--homepage=about:blank", "--no-first-run", "--headless", "--disable-software-rasterizer", "--disable-gpu", "--disable-translate", "--disable-extensions", "--disable-setuid-sandbox", "--remote-debugging-port=9876" ]
