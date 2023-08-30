import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { RadioButton } from '../../../types'
import styles from './styles'

interface RadioButtonGroupProps {
  buttons: RadioButton[]
  setSelected: (newLabel: string) => void
}

const RadioButtonGroup = ({
  buttons,
  setSelected,
}: RadioButtonGroupProps) => {
  return (
    <View style={[styles.main]}>
      {buttons.map(({ label, isSelected }) => (
        <TouchableOpacity
          style={[styles.container]}
          onPress={() => setSelected(label)}
          key={`${label}_${isSelected}`}
        >
          <View style={[styles.border]}>
            {isSelected ? (
              <View style={[styles.fill]} testID={`fill_${label}`} />
            ) : null}
          </View>
          <Text style={[styles.label]}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default RadioButtonGroup
