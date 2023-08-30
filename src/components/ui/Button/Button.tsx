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
