ARG NODE_VERSION=20
ARG APP_DIRNAME=bridge
ARG PROJECT=@meshqtt/bridge

FROM node:${NODE_VERSION}-alpine AS alpine
RUN apk update
RUN apk add --no-cache libc6-compat


FROM alpine AS base
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable && corepack prepare pnpm --activate
RUN npm add --global turbo
RUN pnpm config set store-dir ~/.pnpm-store


FROM base AS pruner
ARG PROJECT

WORKDIR /app

COPY . .
RUN turbo prune --scope=${PROJECT} --docker


FROM base AS builder
ARG PROJECT
ENV CI=true

WORKDIR /app

COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=pruner /app/out/json/ .

RUN --mount=type=cache,id=pnpm,target=~/.pnpm-store pnpm install --frozen-lockfile
COPY --from=pruner /app/out/full/ .

RUN pnpm build --filter=${PROJECT}


FROM base AS runner
ARG APP_DIRNAME

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs
USER node

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder --chown=node:node /app .
WORKDIR /app/apps/${APP_DIRNAME}

CMD ["pnpm", "start"]
