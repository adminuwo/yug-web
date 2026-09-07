# YugAMC Backend - Modular API Service

This is the refactored, production-grade modular backend for the YugAMC platform. The architecture is clean, highly structured, and decouples configurations, models, middlewares, routes, and services for maximum maintainability and testability.

## Project Structure

The project has been refactored into the following clean structure:

```
src/
├── config/             # Configuration managers (env, database, email, storage, vertex)
├── controllers/        # Express controllers separating lead categories & admin actions
├── middleware/         # Custom middlewares (auth, file upload validation)
├── models/             # Mongoose schemas & database models
├── prompts/            # externalized AI/Chat system prompts
├── routes/             # Modular routers dividing endpoints cleanly
├── services/           # Decoupled business logic (email, webhook, SSE, chat, storage, parsing)
├── tests/              # Smoke tests for rapid verification
├── utils/              # Helper utilities (HTML escaping, path utils)
├── app.js              # Express app setup and middleware configuration
└── server.js           # Server startup (DNS configurations, DB connection, app binding)
server.js               # Compatibility entrypoint wrapper
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- MongoDB Instance
- Google Cloud Service Account (configured for Vertex AI & Cloud Storage)

### Installation

1. Clone the repository and navigate to the backend directory:
   ```bash
   cd Yugamc-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create your `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Fill in all the required secrets (the application will fail to start if any required environment variable is missing).

### Running the Server

To start the server in development mode:
```bash
node server.js
```

Or using the npm start script:
```bash
npm start
```

### Running Tests

This backend utilizes Node.js's built-in test runner to execute lightweight smoke tests. Run them using:
```bash
npm test
```

## Security & Architecture Features

- **Strict Environment Checks:** Server fails to start proactively if critical keys like `JWT_SECRET` or `SUPER_ADMIN_API_KEY` are missing.
- **Timing-Safe Webhooks:** Signature validations use `crypto.timingSafeEqual` with buffer sizes matched timing-independently to prevent side-channel leaks.
- **Single-instance Transporters:** Email transporters are instantiated once and cached across calls.
- **Robust File Management:** File uploads are limited to 20 files, max 15MB each, validated by file extension (PDF, DOCX, TXT, MD, JSON), sanitized, and temporary files are strictly cleaned up on success or failure.
