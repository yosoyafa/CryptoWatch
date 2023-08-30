import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import Home from './Home'
import CryptoContext from '../../context/CryptoContext'
import { coins } from '../../../jest/mocks'

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')

describe('Home', () => {
  it('renders correctly', () => {
    render(
      <Home
        navigation={{ navigate: jest.fn() } as any}
        route={{ key: 'home', name: 'Home' }}
      />
    )
  })

  it('should apply the value when changing text', () => {
    const { getByTestId } = render(
      <Home
        navigation={{ navigate: jest.fn() } as any}
        route={{ key: 'home', name: 'Home' }}
      />
    )

    const input = getByTestId('searchBar')
    fireEvent.changeText(input, '123')
    expect(input.props.value).toBe('123')
  })

  it('should show title correctly', () => {
    const { queryByText } = render(
      <Home
        navigation={{ navigate: jest.fn() } as any}
        route={{ key: 'home', name: 'Home' }}
      />
    )
    const titleLabel = queryByText('Currencies')
    expect(titleLabel).not.toBeNull()
  })

  it('should show time button correctly', () => {
    const { queryByTestId } = render(
      <Home
        navigation={{ navigate: jest.fn() } as any}
        route={{ key: 'home', name: 'Home' }}
      />
    )
    const button = queryByTestId('button')
    expect(button).not.toBeNull()
  })

  it('should show currency list', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(coins),
      })
    ) as jest.Mock

    const { findByText } = render(
      <Home
        navigation={{ navigate: jest.fn() } as any}
        route={{ key: 'home', name: 'Home' }}
      />,
      { wrapper: CryptoContext }
    )

    const label1 = await findByText('BTC')
    expect(label1).not.toBe(null)
    const label2 = await findByText('ETH')
    expect(label2).not.toBe(null)
    const label3 = await findByText('USD')
    expect(label3).not.toBe(null)
    const label4 = await findByText('BNB')
    expect(label4).not.toBe(null)
  })

  it('should filter the list', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(coins),
      })
    ) as jest.Mock

    const { findByText, queryByText, getByTestId } = render(
      <Home
        navigation={{ navigate: jest.fn() } as any}
        route={{ key: 'home', name: 'Home' }}
      />,
      { wrapper: CryptoContext }
    )

    const initialBitcoinLabel = await findByText('BTC')
    expect(initialBitcoinLabel).not.toBe(null)
    const initialEthereumLabel = await findByText('ETH')
    expect(initialEthereumLabel).not.toBe(null)

    const input = getByTestId('searchBar')
    fireEvent.changeText(input, 'bit')

    const filteredBitcoinLabel = await findByText('BTC')
    expect(filteredBitcoinLabel).not.toBe(null)
    const filteredEthereumLabel = queryByText('ETH')
    expect(filteredEthereumLabel).toBe(null)
  })

  it('should open modal correctly', async () => {
    const { getByTestId, queryByText } = render(
      <Home
        navigation={{ navigate: jest.fn() } as any}
        route={{ key: 'home', name: 'Home' }}
      />
    )

    const initialModalTitle = queryByText(
      'Change the percentual change timespan'
    )
    expect(initialModalTitle).toBe(null)

    const button = getByTestId('button')
    fireEvent.press(button)

    const finalModal = queryByText(
      'Change the percentual change timespan'
    )
    expect(finalModal).not.toBe(null)
  })
})
