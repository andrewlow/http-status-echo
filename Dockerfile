FROM node

WORKDIR /app

COPY http-status-echo.js /app
COPY package.json /app

RUN npm install

EXPOSE 3000
CMD node http-status-echo.js
