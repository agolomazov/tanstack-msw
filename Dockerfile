FROM node:24-alpine
RUN apk add --no-cache git python3 make g++
RUN corepack enable
WORKDIR /workspace
# Копируем только файлы зависимостей
COPY package.json yarn.lock ./
# Устанавливаем зависимости внутри контейнера
RUN yarn install --frozen-lockfile
# Теперь копируем остальной код (без node_modules с хоста!)
COPY . .
