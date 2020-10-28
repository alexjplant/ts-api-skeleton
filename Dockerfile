FROM node:current-alpine3.10 AS build

WORKDIR /home/node/app/
RUN mkdir src
COPY *.json ./
COPY src ./src
RUN npm install
RUN npm run build

FROM node:current-alpine3.10
WORKDIR /home/node/app
COPY --from=build /home/node/app/dist .
RUN mkdir node_modules
COPY --from=build /home/node/app/node_modules node_modules

ENTRYPOINT ["node", "server.js"]
EXPOSE 3000