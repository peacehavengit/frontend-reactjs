FROM node:12.22.7 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]