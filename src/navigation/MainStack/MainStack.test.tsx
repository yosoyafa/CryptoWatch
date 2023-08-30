import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { render, fireEvent } from '@testing-library/react-native'

import MainStack from '../MainStack'
import { coins } from '../../../jest/mocks'
import CryptoProvider from '../../context/CryptoContext'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

describe('MainStack (navigation)', () => {
  it('should take you to details screen on tapping a currency', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve(coins),
    })

    const { findByText, findByTestId } = render(
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>,
      { wrapper: CryptoProvider }
    )

    const btc = await findByText('BTC')
    fireEvent.press(btc)

    const title = await findByTestId('title')
    expect(title).not.toBe(null)
  })
})
