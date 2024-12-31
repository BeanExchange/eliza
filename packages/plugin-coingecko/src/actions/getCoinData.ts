import { Action } from '@elizaos/core';

export const getCoinData: Action = {
  name: 'getCoinData',
  description: 'Fetch coin data from CoinGecko API',
  handler: async ({ coinId }: { coinId: string }) => {
    const apiUrl = `https://api.coingecko.com/api/v3/coins/${coinId}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const data = await response.json();

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('Error fetching coin data:', error);
      return {
        success: false,
        error: error.message || 'Failed to fetch coin data',
      };
    }
  },
};