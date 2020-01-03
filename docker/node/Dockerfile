FROM alpine:edge AS production-pseudo

RUN apk add --no-cache \
      npm \
      nodejs \
      chromium \
      curl \
      nss \
      fontconfig \
      freetype \
      freetype-dev \
      font-noto \
      font-noto-cjk-extra \
      harfbuzz \
      ca-certificates \
      ttf-freefont && \
    rm -rf /var/cache/*

RUN addgroup -S node && \
    adduser -S -g node node && \
    mkdir -p /home/node && \
    chown -R node:node /home/node

COPY ./docker-entrypoint.sh /
RUN chown node:node /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

# ---

FROM production-pseudo AS development

RUN apk add --no-cache shadow && \
    rm -rf /var/cache/*
