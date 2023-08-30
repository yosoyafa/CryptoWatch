import React from 'react'
import { render } from '@testing-library/react-native'

import CoinDetails from './CoinDetails'
import { coins } from '../../../jest/mocks'

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')

describe('CoinDetails', () => {
  const details = (
    <CoinDetails
      navigation={
        { navigate: jest.fn(), setOptions: jest.fn() } as any
      }
      route={{
        key: 'details',
        name: 'CoinDetails',
        params: { coin: coins.data[0] },
      }}
    />
  )

  it('renders correctly', () => {
    render(details)
  })

  it('renders title correctly', () => {
    const { queryByText } = render(details)
    const title = queryByText('Bitcoin')
    expect(title).not.toBe(null)
  })

  it('renders card correctly', () => {
    const { queryByTestId } = render(details)
    const card = queryByTestId('card')
    expect(card).not.toBe(null)
  })

  it('renders info labels correctly', () => {
    const { queryAllByTestId, debug } = render(details)
    debug()
    const labels = queryAllByTestId('label')
    expect(labels).toHaveLength(11)
  })
})
