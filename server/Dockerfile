FROM node:14

WORKDIR /usr/src/app/server

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4242

CMD ["npm", "start"]