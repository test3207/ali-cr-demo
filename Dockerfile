FROM node:10-alpine
WORKDIR /usr/src/app
COPY . .
EXPOSE 7023
CMD ["node", "index"]
