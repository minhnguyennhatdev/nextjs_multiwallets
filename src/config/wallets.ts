export interface WalletConfig<T> {
  title?: string,
  installed?: boolean,
  connectorId:T,
  priority?: any,
  href?: string,
  downloadLink?: any
}

export enum ConnectorNames {
  MetaMask = 'metaMask',
  Injected = 'injected',
  WalletConnect = 'walletConnect',
  BSC = 'bsc',
  Blocto = 'blocto',
  WalletLink = 'coinbaseWallet',
}

export const wallets: WalletConfig<ConnectorNames>[] = [
  {
    title: 'Metamask',
    installed: typeof window !== 'undefined' && Boolean(window.ethereum?.isMetaMask),
    connectorId: ConnectorNames.MetaMask,
    priority: 1,
    href: 'https://metamask.app.link/dapp/pancakeswap.finance/',
  },
  {
    title: 'Binance Wallet',
    installed: typeof window !== 'undefined' && Boolean(window.BinanceChain),
    connectorId: ConnectorNames.BSC,
    priority: 2,
  },
  {
    title: 'Coinbase Wallet',
    connectorId: ConnectorNames.WalletLink,
    priority: 3,
  },
  {
    title: 'Trust Wallet',
    connectorId: ConnectorNames.Injected,
    installed:
      typeof window !== 'undefined' &&
      (Boolean(window.ethereum?.isTrust) ||
        // @ts-ignore
        Boolean(window.ethereum?.isTrustWallet)),
    priority: 4,
    href: 'https://link.trustwallet.com/open_url?coin_id=20000714&url=https://pancakeswap.finance/',
    downloadLink: {
      desktop: 'https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph/related',
    },
  },
  {
    title: 'WalletConnect',
    connectorId: ConnectorNames.WalletConnect,
    priority: 5,
  },
  {
    title: 'Opera Wallet',
    connectorId: ConnectorNames.Injected,
    priority: () => {
      return typeof window !== 'undefined' && Boolean(window.ethereum?.isOpera) ? 0 : 6
    },
    installed: typeof window !== 'undefined' && Boolean(window.ethereum?.isOpera),
    href: 'https://www.opera.com/crypto/next',
  },
  {
    title: 'Brave Wallet',
    connectorId: ConnectorNames.Injected,
    priority: () => {
      return typeof window !== 'undefined' && Boolean(window.ethereum?.isBraveWallet) ? 0 : 6
    },
    installed: typeof window !== 'undefined' && Boolean(window.ethereum?.isBraveWallet),
  },
  {
    title: 'MathWallet',
    connectorId: ConnectorNames.Injected,
    // @ts-ignore
    installed: typeof window !== 'undefined' && Boolean(window.ethereum?.isMathWallet),
    priority: () => {
      // @ts-ignore
      return typeof window !== 'undefined' && Boolean(window.ethereum?.isMathWallet) ? 0 : 999
    },
  },
  {
    title: 'TokenPocket',
    connectorId: ConnectorNames.Injected,
    priority: () => {
      return typeof window !== 'undefined' && Boolean(window.ethereum?.isTokenPocket) ? 0 : 999
    },
    installed: typeof window !== 'undefined' && Boolean(window.ethereum?.isTokenPocket),
  },
  {
    title: 'SafePal',
    connectorId: ConnectorNames.Injected,
    // @ts-ignore
    installed: typeof window !== 'undefined' && Boolean(window.ethereum?.isSafePal),
    priority: () => {
      // @ts-ignore
      return typeof window !== 'undefined' && Boolean(window.ethereum?.isSafePal) ? 0 : 999
    },
  },
  {
    title: 'Coin98',
    connectorId: ConnectorNames.Injected,
    // @ts-ignore
    installed: typeof window !== 'undefined' && (Boolean(window.ethereum?.isCoin98) || Boolean(window.coin98)),
    priority: () => {
      // @ts-ignore
      return typeof window !== 'undefined' && (Boolean(window.ethereum?.isCoin98) || Boolean(window.coin98)) ? 0 : 999
    },
  },
  {
    title: 'Blocto',
    connectorId: ConnectorNames.Injected,
    // @ts-ignore
    installed: typeof window !== 'undefined' && Boolean(window.ethereum?.isBlocto),
    priority: () => {
      // @ts-ignore
      return typeof window !== 'undefined' && Boolean(window.ethereum?.isBlocto) ? 0 : 999
    },
  },
]
