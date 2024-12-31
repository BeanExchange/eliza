import { Plugin } from '@elizaos/core';
import { getCoinData } from './actions/getCoinData';

const CoinGeckoPlugin: Plugin = {
  description: "Pull marketdata from coinGecko",
  name: 'coingecko',
  actions: [getCoinData],
  providers: [],
  evaluators: [],
  services: [],
  clients: []
};

export default CoinGeckoPlugin;