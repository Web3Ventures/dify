# base image
FROM node:20.11-alpine3.19 AS base
LABEL maintainer="inderjotsingh141@gmail.com"


RUN apk add --no-cache tzdata


# install packages
FROM base AS packages

WORKDIR /app/web

COPY package.json .
COPY yarn.lock .


RUN yarn install 

# build resources
FROM base AS builder
WORKDIR /app/web
COPY --from=packages /app/web/ .
COPY . .

RUN yarn build


# production stage
FROM base AS production

ENV NODE_ENV=production
ENV EDITION=CLOUD
ENV DEPLOY_ENV=PRODUCTION
ENV CONSOLE_API_URL=https://dify.angeltools.xyz
ENV APP_API_URL=https://dify.angeltools.xyz
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_APP_NAME=ChatBotX

# set timezone
ENV TZ=UTC
RUN ln -s /usr/share/zoneinfo/${TZ} /etc/localtime \
    && echo ${TZ} > /etc/timezone

# global runtime packages
RUN yarn global add pm2 \
    && yarn cache clean

WORKDIR /app/web
COPY --from=builder /app/web/public ./public
COPY --from=builder /app/web/.next/standalone ./
COPY --from=builder /app/web/.next/static ./.next/static


COPY docker/pm2.json ./pm2.json
COPY docker/entrypoint.sh ./entrypoint.sh

ARG COMMIT_SHA
ENV COMMIT_SHA=${COMMIT_SHA}


EXPOSE 3000
ENTRYPOINT ["/bin/sh", "./entrypoint.sh"]
