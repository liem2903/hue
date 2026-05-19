# Hue

A mental health journaling mobile app where users rant via voice, Claude AI analyzes the emotions, and a virtual plant grows in response. Built with Expo + React Native (client) and Express + Anthropic SDK (server).

## Architecture

```
hue/
├── client/   # Expo 54 + React Native 0.81 + TypeScript (file-based routing via Expo Router)
└── server/   # Express 5 + Anthropic SDK, ES modules, port 4000
```

No shared code between client and server (no monorepo tooling).

## Dev Commands

```bash
# Backend (run from repo root or server/)
cd server && npm run dev        # nodemon, restarts on changes, port 4000

# Frontend (run from repo root or client/)
cd client && npx expo start     # scan QR for device, press 'w' for web
```

## Environment Variables

**`server/.env`**
```
ANTHROPIC_API_KEY=...
```

**`client/.env`**
```
API-URL=http://<your-local-ip>   # e.g. http://192.168.68.110
```

> The client key uses a hyphen (`API-URL`), not an underscore. Do not commit either `.env` file.

## API

Single endpoint: `POST /api/claude/parse-emotion`

- **Body**: `{ text: string }`
- **Response**: `{ happy: 1-5, sad: 1-5, angry: 1-5, neutral: 1-5, anxious: 1-5 }`
- **File flow**: `routes.js` → `claudeController.js` → `claudeBusiness.js` → Anthropic SDK

## Key Conventions

- **Server**: ES modules only (`import`/`export`). Never use `require()`.
- **Client TypeScript**: strict mode — no implicit `any`.
- **Path alias**: `@/*` maps to `client/` root.
- **Emotion scores**: always integers 1–5.
- **Growth cap**: 200 points (defined in `client/app/index.tsx`).

## Plant Types & Stages

Types: `Cactus Bloom`, `Succulent`, `Sun Flower`, `Climbing Vine`, `Weeping Bell`

Stages: `Seedling` → `Growing` → `Blooming` → `Grown`

SVGs live in `client/components/svgs/<PlantType>/` (one file per stage).

## Critical Files

| File | Purpose |
|------|---------|
| `client/app/index.tsx` | Main screen — growth logic, speech input, API call |
| `client/types/index.ts` | All shared TypeScript types (`Emotion`, `Plant`, `EmotionScores`, etc.) |
| `client/constants/theme.ts` | Colors and typography |
| `server/backend/claudeBusiness.js` | Anthropic SDK call and system prompt |
| `server/routes.js` | API route definitions |

## Testing & Linting

No test suite. Run `cd client && npm run lint` for ESLint checks (Expo config).
