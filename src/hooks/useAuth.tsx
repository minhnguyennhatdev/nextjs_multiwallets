
import { useCallback } from 'react'
import { useConnect, useDisconnect, useNetwork } from 'wagmi'
import { ConnectorNames } from '../config/wallets'
import replaceBrowserHistory from '../utils/replaceBrowserHistory'
import { useActiveChainId } from './useActiveChainId'
import { useSessionChainId } from './useSectionChainId'
import { clearUserStates } from '../utils/clearUserStates'
import { useDispatch } from 'react-redux'
import { useSignMessage } from '../../packages/wagmi/src'

const useAuth = () => {
  const { connectAsync, connectors } = useConnect()
  const { chain } = useNetwork()
  const { disconnectAsync } = useDisconnect()
  const { chainId } = useActiveChainId()
  const [, setSessionChainId] = useSessionChainId()
  const dispatch = useDispatch()
  const { signMessageAsync } = useSignMessage()

  const login = useCallback(
    async (connectorID: ConnectorNames) => {
      const connector = connectors.find((c) => c.id === connectorID)
      console.log('connector', connector);
      try {
        const connected = await connectAsync({ connector: connector, chainId })
        console.log('connected', connected);
        if (!connected.chain.unsupported && connected.chain.id !== chainId) {
          console.log(connected.chain.id, '-> metwork unsupported')
          replaceBrowserHistory('chainId', connected.chain.id)
          setSessionChainId(connected.chain.id)
        }
        const signature = await signMessageAsync({ message: 'HELLO WORLD' })
        console.log('signature', signature);
      } catch (error) {
        console.error('login error', error)
      }
    },
    [connectors, connectAsync, chainId, setSessionChainId, signMessageAsync],
  )

  const logout = useCallback(async () => {
    try {
      await disconnectAsync()
      clearUserStates(dispatch, chain?.id, true)
    } catch (error) {
      console.error(error)
    }
  }, [disconnectAsync, dispatch, chain?.id])

  return { login, logout }
}

export default useAuth
