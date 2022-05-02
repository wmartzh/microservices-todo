FROM node:18
WORKDIR /gateway
COPY package.json ./
COPY tsconfig*.json ./
RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install
COPY . .
RUN tsc
CMD ["node", "./dist/index.js"]