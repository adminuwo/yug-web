# Stage 1: Build Frontend
FROM node:20-slim AS frontend-builder
WORKDIR /app/frontend

COPY Yugamc-frontend/package*.json ./
RUN npm install

COPY Yugamc-frontend/ ./
# Empty VITE_API_URL ensures all frontend API calls use relative paths (same origin, zero CORS)
ENV VITE_API_URL=""
RUN npm run build

# Stage 2: Production Server (Node.js + Express)
FROM node:20-slim
WORKDIR /usr/src/app

# Install backend dependencies
COPY Yugamc-backend/package*.json ./
RUN npm install --production

# Copy backend application code
COPY Yugamc-backend/ ./

# Copy compiled frontend assets into public-frontend
COPY --from=frontend-builder /app/frontend/dist ./public-frontend

# Cloud Run default port
ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]
