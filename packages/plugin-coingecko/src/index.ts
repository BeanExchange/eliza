import { Plugin } from '@elizaos/core';
import { getCoinData } from './actions/getCoinData';

const coingeckoPlugin: Plugin = {
  name: 'coingecko',
  description: "Pull marketdata from coinGecko",
  actions: [getCoinData],
  providers: [],
  evaluators: [],
  services: [],
  clients: []
};

export default coingeckoPlugin;