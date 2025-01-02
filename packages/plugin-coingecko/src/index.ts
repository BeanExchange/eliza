import { Plugin } from '@elizaos/core';
import { getCoinData } from './actions/getCoinData';

const coingeckoPlugin: Plugin = {
  name: 'coingecko',
  description: "Pull marketdata from coinGecko",
  actions: [getCoinData],
  evaluators: [],
};

export default coingeckoPlugin;