FROM alpine:edge AS production-pseudo

RUN apk add --no-cache \
      npm \
      nodejs \
      chromium \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ca-certificates \
      ttf-freefont && \
    rm -rf /var/cache/*

RUN addgroup -S node && \
    adduser -S -g node node && \
    mkdir -p /home/node && \
    chown -R node:node /home/node

USER node

# ---

FROM production-pseudo AS development

USER root

RUN apk add --no-cache shadow && \
    rm -rf /var/cache/*

USER node
