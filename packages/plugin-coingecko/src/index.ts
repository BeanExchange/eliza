import { Plugin } from '@elizaos/core';
import { getPrice } from './actions/getCoinData';

const coingeckoPlugin: Plugin = {
  name: 'coingecko',
  description: "Pull marketdata from coinGecko",
  actions: [getPrice],
  evaluators: [],
};

export default coingeckoPlugin;
export {coingeckoPlugin as coingeckoPlugin };
