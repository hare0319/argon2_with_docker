FROM node:20-alpine
RUN apk update

RUN corepack enable

USER node

WORKDIR /app

COPY --chown=node:node ./package.json ./pnpm-lock.yaml ./
RUN pnpm i

COPY --chown=node:node . .

CMD [ "tail", "-f", "/dev/null" ]
