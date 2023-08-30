import React, {
  ReactNode,
  createContext,
  useEffect,
  useState,
} from 'react'
import type { Coin, CoinList } from '../types'
import { isNil } from 'ramda'
import { removeDups, request, sort } from '../utils'

export type CryptoContextType = {
  coins: Coin[]
  isLoading: boolean
  fetchMore: () => void
  fetchSingleCoin: (name: string) => Promise<Coin | undefined>
  fetchCoins: (url?: string) => void
  addCoin: (coin: Coin) => void
}

export const CryptoContext = createContext<CryptoContextType | null>({
  coins: [],
  isLoading: false,
  fetchMore: () => null,
  fetchSingleCoin: async () => undefined,
  addCoin: () => null,
  fetchCoins: () => null,
})

const CryptoProvider = ({ children }: { children: ReactNode }) => {
  const [coins, setCoins] = useState<Coin[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [nextPage, setNextPage] = useState<string | null>(null)

  const fetchCoins = (url?: string) => {
    setIsLoading(true)
    request<CoinList>(
      url ?? 'https://api.coinlore.net/api/tickers/?start=0&limit=20'
    ).then(({ data, info: { time } }) => {
      setCoins([...coins, ...data])
      setIsLoading(false)
      setNextPage(
        `https://api.coinlore.net/api/tickers/?start=${coins.length}&limit=20`
      )
    })
  }

  const fetchSingleCoin = async (id: string) => {
    const result = await request<Coin | undefined>(
      `https://api.coinlore.net/api/ticker/?id=${id}`
    )
    return result
  }

  const fetchMore = () => {
    if (!isNil(nextPage)) {
      fetchCoins(nextPage)
    }
  }

  const addCoin = (coin: Coin) => {
    setCoins([...coins, coin])
  }

  useEffect(() => {
    fetchCoins()
  }, [])

  return (
    <CryptoContext.Provider
      value={{
        coins: removeDups(sort(coins)),
        isLoading,
        fetchMore,
        fetchSingleCoin,
        addCoin,
        fetchCoins,
      }}
    >
      {children}
    </CryptoContext.Provider>
  )
}

export default CryptoProvider
