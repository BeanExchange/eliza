#!/bin/bash
rm -rf node_modules
pnpm install --no-frozen-lockfile
pnpm build
pnpm start --characters="characters/trump.character.json,characters/tate.character.json"
