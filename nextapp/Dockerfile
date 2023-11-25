FROM node:18-alpine as builder

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install

COPY ./ ./

RUN npm run build

EXPOSE 3000

CMD ["npm","run","start"]
# =========
# FROM nginx
# EXPOSE 3000
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /usr/app/.next /usr/share/nginx/html
# ========

