import { Coin } from '../types'

/**
 * The function is a TypeScript implementation of a generic request function that sends an HTTP request
 * and returns the response as a specified type.
 * @param {string} url - The `url` parameter is a string that represents the URL of the resource you
 * want to make a request to. It can be an absolute URL or a relative URL.
 * @param {RequestInit} config - The `config` parameter is an optional object that allows you to
 * customize the request. It can include properties such as `method` (GET, POST, etc.), `headers`
 * (request headers), `body` (request body), `mode` (CORS mode), `cache` (request
 * @returns a Promise that resolves to a value of type TResponse.
 */
export const request = async <TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> => {
  try {
    const response = await fetch(url, config)
    return (await response.json()) as TResponse
  } catch (error) {
    return undefined as TResponse
  }
}

/**
 * The `capitalize` function takes a string as input and returns the same string with the first letter
 * of each word capitalized.
 * @param {string} pre - The `pre` parameter is a string that represents the input text that you want
 * to capitalize.
 */
export const capitalize = (pre: string): string =>
  pre
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(' ')

/**
 * The function sorts an array of coins based on their rank.
 * @param {Coin[]} coins - The `coins` parameter is an array of objects of type `Coin`.
 */
export const sort = (coins: Coin[]): Coin[] =>
  coins.sort((a, b) => a.rank - b.rank)

/**
 * The `removeDups` function filters an array of `Coin` objects to remove any duplicates based on the
 * `id` and `nameid` properties.
 * @param {Coin[]} coins - The `coins` parameter is an array of objects of type `Coin`.
 */
export const removeDups = (coins: Coin[]): Coin[] =>
  coins.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (t) => t.id === value.id && t.nameid === value.nameid
      )
  )

/**
 * The `formatCurrency` function formats a given value as a currency in USD format.
 * @param {string | number} value - The `value` parameter can be either a string or a number. It
 * represents the value that you want to format as currency.
 */
export const formatCurency = (value: string | number) =>
  new Intl.NumberFormat('us-US', {
    style: 'currency',
    currency: 'USD',
  }).format(+value)
