import {
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
    elizaLogger,
    Action
} from "@elizaos/core";

export const getCoinData: Action = {
  name: 'get_price',
  description: 'Fetch coin data from CoinGecko API',
//   handler: async ({ coinId }: { coinId: string }) => {
//     const apiUrl = `https://api.coingecko.com/api/v3/coins/${coinId}`;

//     try {
//       const response = await fetch(apiUrl);

//       if (!response.ok) {
//         throw new Error(`Failed to fetch data: ${response.statusText}`);
//       }

//       const data = await response.json();

//       return {
//         success: true,
//         data,
//       };
//     } catch (error) {
//       console.error('Error fetching coin data:', error);
//       return {
//         success: false,
//         error: error.message || 'Failed to fetch coin data',
//       };
//     }
//   },

    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback?: HandlerCallback
    ): Promise<boolean> => {
        elizaLogger.log(">>>>>>> Handle with message %s and state %s", JSON.stringify(message), JSON.stringify(state));
        if (callback) {
            callback({
                text: `Successfully query`,
                content: {
                    success: true,
                    coin: "BTC",
                    price: 100000
                },
            });
        }
        return true;
    },
    validate: async (runtime: IAgentRuntime, message: Memory) => {
        console.log(">>>>>>> Validating marketdata query with message >> %s", JSON.stringify(message));
        return false;
    },
    similes:[
        "fetch_price", "get_price", "load_price", "price_of", "market_price"
    ]
};