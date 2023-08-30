import { Coin } from '../types'

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

export const capitalize = (pre: string): string =>
  pre
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(' ')

export const sort = (coins: Coin[]): Coin[] =>
  coins.sort((a, b) => a.rank - b.rank)

export const removeDups = (coins: Coin[]): Coin[] =>
  coins.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (t) => t.id === value.id && t.nameid === value.nameid
      )
  )

export const formatCurency = (value: string | number) =>
  new Intl.NumberFormat('us-US', {
    style: 'currency',
    currency: 'USD',
  }).format(+value)
