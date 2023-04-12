FROM node:16-alpine

WORKDIR /app 
RUN apk add --no-cache libc6-compat
RUN npm install -g nodemon

# bcrpyt gabisa di windows, harus diganti jadi bcryptjs