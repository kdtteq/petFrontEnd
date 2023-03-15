# # Stage 1: Install dependencies
# FROM node:16-alpine AS deps
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# RUN yarn install

# # Stage 2: Build app
# FROM node:16-alpine AS build
# WORKDIR /app
# COPY . .
# COPY --from=deps /app/node_modules ./node_modules
# RUN yarn build

# # Stage 3: Production environment
# FROM node:16-alpine
# WORKDIR /app
# COPY --from=build /app/.next ./.next
# COPY --from=deps /app/node_modules ./node_modules
# CMD ["yarn", "start"]

# FROM --platform=linux/amd64 node:16

# WORKDIR /app

# ENV PORT 3000

# COPY ./package.json /app
# COPY ./yarn.lock /app

# RUN yarn install
# RUN npm install

# COPY . /app

# RUN yarn run build


# EXPOSE 3000


# CMD ["yarn", "start"]


# FROM --platform=linux/amd64 node:16
FROM  node:16-alpine as install

WORKDIR /app

COPY ./package.json ./yarn.lock /app/
RUN yarn install --Production
RUN npm install --Production
COPY . .

FROM  node:16-alpine as build
WORKDIR /app
COPY --from=install /app . 
RUN yarn run build


FROM  node:16-alpine as launch
WORKDIR /app
COPY --from=build /app . 
EXPOSE 3000
CMD ["yarn", "start"]