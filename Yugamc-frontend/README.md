# YugAMC Frontend

Production-grade, highly modular React application built on Vite, designed to display luxury real estate listings in Jabalpur and support automated AI concierge service and admin management tabs.

## Project Overview
YugAMC is a premium portal showcasing exclusive residential and commercial real estate properties in Jabalpur. It features:
- **Interactive Listing Pages**: Beautifully presenting active, upcoming, and past highlight projects.
- **AI Assistant Concierge**: Real-time property guide with lead registration, speech recognition, and custom content formatting.
- **Admin Management Panel**: Secure dashboard allowing leads tracking, site visit reservation listings, AI training files manager, and CSV data export.

---

## Target Architecture

The application has been refactored to separate concerns, centralize authentication, and isolate API modules.

```
src/
  ├── assets/          # Static assets (images, logos)
  ├── auth/            # Admin authorization session management
  │   ├── ProtectedRoute.jsx
  │   └── authStorage.js
  ├── components/      # UI components split by feature
  │   ├── admin/       # Modular dashboard tab files
  │   ├── assistant/   # AI Assistant components
  │   └── common/      # Shared layout components
  ├── config/          # Central API base configuration
  │   └── api.js
  ├── hooks/           # State and side-effects encapsulation
  │   ├── useAdminData.js
  │   └── useAssistantChat.js
  ├── pages/           # Application views and routing endpoints
  ├── services/        # Central API request services layer
  │   ├── adminApi.js
  │   ├── assistantApi.js
  │   ├── bookingApi.js
  │   └── contactApi.js
  └── utils/           # Safety helper functions (sanitizers)
      └── sanitize.js
```

---

## Local Setup

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
1. Clone the repository and navigate to the frontend folder:
   ```bash
   cd Yugamc-frontend
   ```
2. Install the node packages:
   ```bash
   npm install
   ```
3. Set up your local environment file:
   ```bash
   cp .env.example .env
   ```

### Running Locally
To launch the hot-reloading development server:
```bash
npm run dev
```
The application will run locally on `http://localhost:5173/`.

---

## Environment Variables
The application consumes the following environment variable:
- `VITE_API_URL`: The base URL pointing to the deployed backend server.
  - Deployed Production fallback: `https://yugamc-backend-246449377479.asia-south1.run.app`

---

## Scripts & Operations

Inside `package.json`, the following scripts are available:
- `npm run dev`: Launches local hot-reload web server.
- `npm run build`: Compiles optimized assets to the `dist/` directory.
- `npm run preview`: Statically serves the compiled `dist/` build locally.
- `npm run lint`: Analyzes codebase structure for lint errors.

---

## Production Build & Deployment

To bundle the application for production:
```bash
npm run build
```
This generates compiled production assets in the `dist/` folder. The folder can be statically hosted via Netlify, Vercel, Firebase hosting, or Cloudflare Pages.

---

## Project Maintenance

### Production URL
- **Live URL**: `https://yugamc-backend-246449377479.asia-south1.run.app`

### Maintenance Owner
- **Team**: YugAMC Core Architecture & Platform Engineering Team
- **Status**: Production Ready / Maintenance Mode

---

## Troubleshooting

#### 1. "Session Expired" alert triggers immediately
- **Cause**: The server returned a `401 Unauthorized` response, likely due to an invalid or expired token stored in `localStorage`.
- **Solution**: Click log out or wait for the auto-redirect to `/admin/login`, then log back in with valid credentials.

#### 2. Speech recognition fails to trigger
- **Cause**: The browser does not support the Web Speech API (e.g., standard desktop Firefox/Safari), or site microphone permissions are blocked.
- **Solution**: Enable site microphone permissions in Chrome or Edge.

#### 3. Upload file training fails
- **Cause**: Supported knowledge base formats are PDF, Word, or plain text. Very large documents or wrong formats might cause training timeouts on the backend.
- **Solution**: Verify the document format and split files into smaller sections if necessary.
