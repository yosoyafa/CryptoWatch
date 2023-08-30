import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Button from './Button'

describe('Button', () => {
  const onPress = jest.fn()

  it('renders correctly', () => {
    render(
      <Button
        onPress={onPress}
        label="Button"
        icon={
          <Ionicons name="timer-outline" size={28} color="#FFFFFF" />
        }
      />
    )
  })

  it('shows only label correctly', () => {
    const { queryByText } = render(
      <Button onPress={onPress} label="Button" />
    )
    const label = queryByText('Button')
    expect(label).not.toBeNull()
    const icon = queryByText('[]')
    expect(icon).toBeNull()
  })

  it('shows only icon correctly', () => {
    const { queryByText, queryByTestId } = render(
      <Button
        onPress={onPress}
        icon={
          <Ionicons
            testID="icon"
            name="timer-outline"
            size={28}
            color="#FFFFFF"
          />
        }
      />
    )
    const label = queryByText('Button')
    expect(label).toBeNull()
    const icon = queryByTestId('icon')
    expect(icon).not.toBeNull()
  })

  it('runs onPress function correctly', () => {
    const { getByTestId } = render(
      <Button
        onPress={onPress}
        icon={
          <Ionicons name="timer-outline" size={28} color="#FFFFFF" />
        }
      />
    )

    const button = getByTestId('button')
    fireEvent.press(button)
    expect(onPress).toHaveBeenCalled()
  })
})
