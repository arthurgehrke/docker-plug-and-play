FROM node:12.18-alpine

WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3001

CMD ["yarn", "start"]
