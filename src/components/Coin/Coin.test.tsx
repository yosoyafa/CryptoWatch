import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import Coin from './Coin'

describe('Coin Card', () => {
  const onPress = jest.fn()
  const bitcoin = (
    <Coin
      name="Bitcoin"
      onPress={onPress}
      symbol="BTC"
      price="99999.99"
      percentChange="0.02"
      borderColor="#643367"
    />
  )

  it('renders correctly', () => {
    render(bitcoin)
  })

  it('shows symbol correctly', () => {
    const { queryByText } = render(bitcoin)
    const numberLabel = queryByText('BTC')
    expect(numberLabel).not.toBeNull()
  })

  it('shows name correctly', () => {
    const { queryByText } = render(bitcoin)
    const nameLabel = queryByText('Bitcoin (BTC)')
    expect(nameLabel).not.toBeNull()
  })

  it('shows price correctly', () => {
    const { queryByText } = render(bitcoin)
    const nameLabel = queryByText('$99999.99')
    expect(nameLabel).not.toBeNull()
  })

  it('shows percentage change correctly', () => {
    const { queryByText } = render(bitcoin)
    const nameLabel = queryByText('+0.02%')
    expect(nameLabel).not.toBeNull()
  })

  it('runs onPress function correctly', () => {
    const { getByTestId } = render(bitcoin)

    const card = getByTestId('card')
    fireEvent.press(card)
    expect(onPress).toHaveBeenCalled()
  })
})
