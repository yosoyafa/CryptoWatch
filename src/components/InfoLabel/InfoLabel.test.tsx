import React from 'react'
import { render } from '@testing-library/react-native'
import InfoLabel from './InfoLabel'

describe('Info Label', () => {
  const infoLabel = <InfoLabel label="Price (USD)" info="25989.95" />
  it('renders correctly', () => {
    render(infoLabel)
  })

  it('shows label correctly', () => {
    const { queryByText } = render(infoLabel)
    const label = queryByText('Price (USD): 25989.95')
    expect(label).not.toBeNull()
  })
})
