import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Modal from './Modal'
import { Text } from 'react-native'

describe('Modal', () => {
  const onPress = jest.fn()
  const modal = (
    <Modal isVisible={true} onClose={onPress} title="Title">
      <Text>Body</Text>
    </Modal>
  )

  it('renders correctly', () => {
    render(modal)
  })

  it('shows title correctly', () => {
    const { queryByText } = render(modal)
    const titleLabel = queryByText('Title')
    expect(titleLabel).not.toBeNull()
  })

  it('shows body correctly', () => {
    const { queryByText } = render(modal)
    const bodyLabel = queryByText('Body')
    expect(bodyLabel).not.toBeNull()
  })

  it('renders correctly without title', () => {
    const { queryByText, debug } = render(
      <Modal isVisible={true} onClose={onPress}>
        <Text>Body</Text>
      </Modal>
    )
    const titleLabel = queryByText('Title')
    expect(titleLabel).toBeNull()
    const bodyLabel = queryByText('Body')
    expect(bodyLabel).not.toBeNull()
  })
})
