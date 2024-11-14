FROM node:23.0-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY frontend/package.json ./
COPY frontend/package-lock.json ./
RUN npm install
RUN npm install react-scripts@5.0.1 -g
COPY frontend/. ./
CMD ["npm", "start"]
