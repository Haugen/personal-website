# tobiashaugen

Personlig webbplats. Astro + Tailwind, en enda sida.

```sh
pnpm install
pnpm dev          # localhost:4321
pnpm build        # bygger till dist/
pnpm preview:cf   # bygger och kör sidan lokalt i Cloudflares runtime (wrangler dev)
```

## Driftsättning

Sidan körs som statiska filer på Cloudflare Workers (`wrangler.jsonc`). Workers Builds bygger och driftsätter
automatiskt vid push till `main` (`pnpm build` + `npx wrangler deploy`); PR:er får egna förhandsadresser.
`pnpm deploy` driftsätter manuellt från den egna datorn (kräver `wrangler login`).

Cachning: filerna i `/_astro/` har hash i namnet och cachas i ett år (`public/_headers`), HTML valideras om vid
varje anrop så att nya deployer syns direkt.
