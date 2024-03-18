export const environment = {
  name: 'development',
  production: false,
  origin: 'https://craftscript.com/',
  chains: [
    {
      chainId: 1,
      icon: '/assets/icons/networks/ethereum.svg',
      token: 'ETH',
      chainName: 'Ethereum Mainnet',
      rpcUrl: ``,
    },
    {
      chainId: 137,
      icon: '/assets/icons/networks/polygon.svg',
      token: 'MATIC',
      chainName: 'Polygon Mainnet',
      rpcUrl: ``,
    },
  ],
};
