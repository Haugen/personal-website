# tobiashaugen

Personlig webbplats. Astro + Tailwind, en enda sida.

Node-versionen står i `.nvmrc` (`nvm use`), pnpm-versionen i `packageManager` i `package.json`. Cloudflare läser
samma ställen, så ingen versionsinställning behövs i dashboarden.

```sh
nvm use
pnpm install
pnpm dev          # localhost:4321
pnpm build        # bygger till dist/
pnpm preview:cf   # bygger och kör sidan lokalt i Cloudflares runtime (wrangler dev)
```

## Driftsättning

Sidan körs som statiska filer på Cloudflare Workers (`wrangler.jsonc`). Workers Builds bygger och driftsätter
automatiskt vid push till `main` (`pnpm build` + `npx wrangler deploy`). Andra brancher byggs inte – testa lokalt
med `pnpm preview:cf`.
`pnpm deploy` driftsätter manuellt från den egna datorn (kräver `wrangler login`).

Cachning: filerna i `/_astro/` har hash i namnet och cachas i ett år (`public/_headers`), HTML valideras om vid
varje anrop så att nya deployer syns direkt.
