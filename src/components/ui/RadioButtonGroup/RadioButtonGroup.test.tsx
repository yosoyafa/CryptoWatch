import React from 'react'
import { render } from '@testing-library/react-native'

import RadioButtonGroup from './RadioButtonGroup'

describe('Radio Button Group', () => {
  const onPress = jest.fn()
  const group = (
    <RadioButtonGroup
      buttons={[
        { label: '1 hour', isSelected: true },
        { label: '24 hours', isSelected: false },
        { label: '7 days', isSelected: false },
      ]}
      setSelected={onPress}
    />
  )

  it('renders correctly', () => {
    render(group)
  })

  it('shows options correctly', () => {
    const { queryByText } = render(group)
    const label1 = queryByText('1 hour')
    expect(label1).not.toBeNull()
    const label2 = queryByText('24 hours')
    expect(label2).not.toBeNull()
    const label3 = queryByText('7 days')
    expect(label3).not.toBeNull()
  })

  it('shows selected option correctly', () => {
    const { queryByTestId } = render(group)
    const fill1 = queryByTestId('fill_1 hour')
    expect(fill1).not.toBeNull()
    const fill2 = queryByTestId('fill_24 hours')
    expect(fill2).toBeNull()
    const fill3 = queryByTestId('fill_7 days')
    expect(fill3).toBeNull()
  })
})
