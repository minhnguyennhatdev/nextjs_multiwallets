import type { NextPage } from 'next'
import { wallets } from '../config/wallets'
import useActiveWeb3React from '../hooks/useActiveWeb3React'
import useAuth from '../hooks/useAuth'

const Home: NextPage = () => {
  const { login, logout } = useAuth()

  const { account, chainId } = useActiveWeb3React()

  return (
    <div className='flex flex-col w-full justify-center items-center'>

      {wallets.map((wallet) => (
        <div key={wallet.title} className='mt-6 cursor-pointer'>
          <div onClick={() => login(wallet.connectorId)}>
            {wallet.title}
          </div>
        </div>
      ))}
      <button className='mt-8 bg-pink-300 border-[1px] p-2 rounded-lg' onClick={logout} >
        Logout
      </button>
      <div className='mt-10 text-2xl font-bold'>
        <div>
          Address: {account}
        </div>
        <div>
          Chain id: {chainId}
        </div>
      </div>
    </div>
  )
}

export default Home
