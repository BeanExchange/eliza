import { Plugin } from "@eliza/core";

export const coingeckoPlugin: Plugin = {
  name: "coingecko",
  actions: {
    async getMarketData({ args }) {
      const { cryptoId } = args;
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`);
      const data = await response.json();
      return data;
    },
  },
};

export default coingeckoPlugin;