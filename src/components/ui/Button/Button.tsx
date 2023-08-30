import React, { ReactNode } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { isNil } from 'ramda'

interface ButtonProps {
  label?: string
  icon?: ReactNode
  onPress: () => void
  disabled?: boolean
}

/**
 * The Button component is a TypeScript React component that renders a TouchableOpacity with a label
 * and an icon, and can be disabled and trigger an onPress event.
 * @param {ButtonProps}  - - `label`: The text to be displayed on the button.
 * @returns The `Button` component is returning a `TouchableOpacity` component with optional `label`
 * and `icon` elements.
 */
const Button = ({ label, icon, disabled, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.main]}
      onPress={onPress}
      disabled={disabled}
      testID="button"
    >
      {!isNil(label) && <Text testID="label">{label}</Text>}
      {!isNil(icon) && icon}
    </TouchableOpacity>
  )
}

export default Button
