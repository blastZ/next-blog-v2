# node v16.13.0, npm v8.1.0
FROM node:lts-alpine@sha256:60ef0bed1dc2ec835cfe3c4226d074fdfaba571fd619c280474cc04e93f0ec5b AS base

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm config set registry=https://registry.npmmirror.com \
  && npm install pm2 -g \
  && npm install --only=production \
  && npm cache clean --force

FROM base AS build

COPY . .

RUN npm install && npm run build

FROM base AS dev

RUN npm install

CMD ["npm", "run", "start:dev"]

FROM base AS production

ENV NODE_ENV production
ENV PORT 3000

COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/next.config.js ./
COPY ecosystem.config.js ./

CMD pm2-runtime --raw ecosystem.config.js --env ${APP_ENV}