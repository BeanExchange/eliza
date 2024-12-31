import { Plugin } from '@elizaos/core';
import { getCoinData } from './actions/getCoinData';

const CoinGeckoPlugin: Plugin = {
  name: 'coingecko',
  actions: {
    getCoinData,
  },
};

export default CoinGeckoPlugin;