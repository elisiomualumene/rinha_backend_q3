FROM node

WORKDIR /usr/app

RUN apt-get update -y && apt-get install -y openssl

COPY package.json ./

RUN yarn install

COPY . . 

EXPOSE 3000

CMD [ "yarn", "start:dev" ]