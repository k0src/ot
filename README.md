## Prerequisites

- Node.js 20+
- npm 10+
- Docker + Docker Compose

## Local Setup

```bash
npm install
cp .env.example .env            # fill in local values (no real secrets)
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

## Running

```bash
docker-compose up               # frontend :5173, backend :3000, db :1433
```

Or run workspaces individually:

```bash
npm run dev --workspace backend
npm run dev --workspace frontend
```

## Testing

```bash
npm test                        # runs tests in all workspaces
npm run typecheck               # tsc --noEmit in all workspaces
npm run lint
npm run format:check
```

## Deployment

CI/CD via GitHub Actions using OIDC federated auth to Azure. Frontend deploys
to Azure Static Web Apps; backend builds a container, pushes to Azure Container
Registry, and deploys to Azure App Service (Linux, Node 20). Infrastructure is
defined in `infra/` (Bicep).
