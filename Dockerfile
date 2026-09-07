# Build stage
FROM node:20-slim AS build-stage
WORKDIR /app

# Build arguments with default production backend URL
ARG VITE_API_URL=https://yugamc-backend-246449377479.asia-south1.run.app
ENV VITE_API_URL=$VITE_API_URL

COPY Yugamc-frontend/package*.json ./
RUN npm install

COPY Yugamc-frontend/ ./
RUN npm run build

# Production stage
FROM nginx:stable-alpine
# Custom nginx config to handle SPA routing and Cloud Run default port 8080
RUN echo 'server { \
    listen 8080; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
