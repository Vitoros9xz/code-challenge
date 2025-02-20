const Blockchain = {
  Osmosis: 100,
  Ethereum: 50,
  Arbitrum: 30,
  Zilliqa: 20,
  Neo: 20,
  Default: -99,
} as const;

export const getPriority = (blockchain: string): number =>
  Blockchain[blockchain] || Blockchain.Default;
