FROM node:18

WORKDIR /usr/src/app/client

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["sh", "-c", "sleep 60 && npm run mono"]

EXPOSE 3000