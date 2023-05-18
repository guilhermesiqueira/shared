export default interface Chain {
  id: number;
  name: string;
  ribonContractAddress: string;
  donationTokenContractAddress: string;
  chainId: number;
  rpcUrls: string;
  nodeUrl: string;
  symbolName: string;
  currencyName: string;
  blockExplorerUrls: string;
  defaultPoolAddress: string;
  subgraphUrl?: string;
  defaultIntegrationHolding?: string;
}
