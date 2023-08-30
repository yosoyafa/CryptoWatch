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

/* The code is defining a context called `CryptoContext` using the `createContext` function from React.
The initial value of the context is an object that contains properties such as `coins`, `isLoading`,
`fetchMore`, `fetchSingleCoin`, `addCoin`, and `fetchCoins`. These properties are initialized with
default values. */
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

  /**
   * The function fetchCoins fetches a list of coins from an API and updates the state with the fetched
   * data.
   * @param {string} [url] - The `url` parameter is an optional string that represents the URL from
   * which to fetch the coins data. If no URL is provided, it defaults to
   * `'https://api.coinlore.net/api/tickers/?start=0&limit=20'`.
   */
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

  /**
   * The function fetchSingleCoin is an asynchronous function that fetches a single coin's data from an
   * API based on its ID.
   * @param {string} id - The `id` parameter is a string that represents the unique identifier of a
   * coin. It is used to fetch information about a specific coin from the API.
   * @returns The function `fetchSingleCoin` is returning a promise that resolves to a value of type
   * `Coin | undefined`.
   */
  const fetchSingleCoin = async (id: string) => {
    const result = await request<Coin | undefined>(
      `https://api.coinlore.net/api/ticker/?id=${id}`
    )
    return result
  }

  /**
   * The function fetchMore fetches more coins if there is a next page available.
   */
  const fetchMore = () => {
    if (!isNil(nextPage)) {
      fetchCoins(nextPage)
    }
  }

  /**
   * The addCoin function takes a coin object as a parameter and adds it to the coins array.
   * @param {Coin} coin - The parameter `coin` is of type `Coin`.
   */
  const addCoin = (coin: Coin) => {
    setCoins([...coins, coin])
  }

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, the
  `useEffect` hook is used to fetch the initial list of coins when the component is mounted. */
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
