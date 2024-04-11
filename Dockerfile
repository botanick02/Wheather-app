
FROM node:13.12.0-alpine as build


WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . ./
ARG REACT_APP_GEO_SEARCH_API_ENDPOINT
ENV REACT_APP_GEO_SEARCH_API_ENDPOINT = $REACT_APP_GEO_SEARCH_API_ENDPOINT

RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE $PORT

CMD ["nginx", "-g", "daemon off;"]