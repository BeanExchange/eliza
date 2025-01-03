import {
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
    elizaLogger,
    Action
} from "@elizaos/core";

export const getPrice: Action = {
  name: 'getPrice',
  description: 'Get coin price from CoinGecko API',
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        options: {},
        callback?: HandlerCallback
    ) => {
        console.log(">>>>>>> Handle with message %s and state");
        if(callback) {
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
        console.log(">>>>>>> auto pass Validate");
        return true;
    },
    similes:["fetch_price", "get_price", "load_price", "price_of", "market_price"],
    examples: [
        {
          "input": {
            "asset": "BTC",
            "currency": "USD"
          },
          "output": {
            "text": "The current price of BTC is $34,500 USD."
          }
        },
        {
          "input": {
            "asset": "ETH",
            "currency": "EUR"
          },
          "output": {
            "text": "The current price of ETH is €2,800 EUR."
          }
        },
        {
          "input": {
            "asset": "AAPL",
            "currency": "USD"
          },
          "output": {
            "text": "The current price of AAPL is $175 USD."
          }
        }
    ]
};