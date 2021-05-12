FROM node:14

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install --force
RUN npm install minimist

COPY . .

# CMD node index.js 
CMD npm start --  --DECREMENT_BY_SECS=2

EXPOSE 8080
