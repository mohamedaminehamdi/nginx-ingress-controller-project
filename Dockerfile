FROM node:14

WORKDIR /app

COPY server.js .
COPY index.html .
COPY assets ./assets
COPY package.json .

RUN npm install

EXPOSE 3005

CMD ["node", "server.js"]
