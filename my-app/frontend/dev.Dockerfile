FROM node:18

ENV REACT_APP_BACKEND_URL='http://localhost:8080/api/'

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["npm", "start"]