import { Plugin } from '@elizaos/core';
import { getPrice } from './actions/getPrice';

const coingeckoPlugin: Plugin = {
  name: 'coingecko',
  description: "Pull marketdata from coinGecko",
  actions: [getPrice],
  evaluators: [],
  providers: []
};

export default coingeckoPlugin;
export {coingeckoPlugin as coingeckoPlugin };
