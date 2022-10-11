import { useProvider } from 'wagmi'
import { useWeb3React } from '../../packages/wagmi/src'
import { useActiveChainId } from './useActiveChainId'

const useActiveWeb3React = () => {
  const web3React = useWeb3React()
  const { chainId, isWrongNetwork } = useActiveChainId()
  const provider = useProvider({ chainId })

  return {
    provider,
    ...web3React,
    chainId,
    isWrongNetwork,
  }
}

export default useActiveWeb3React
