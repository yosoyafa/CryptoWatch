import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { RadioButton } from '../../../types'
import styles from './styles'

interface RadioButtonGroupProps {
  buttons: RadioButton[]
  setSelected: (newLabel: string) => void
}

/**
 * The RadioButtonGroup component renders a group of radio buttons with labels and allows the user to
 * select one option.
 * @param {RadioButtonGroupProps}  - - `buttons`: An array of objects representing the radio buttons.
 * Each object should have a `label` property representing the button label and an `isSelected`
 * property indicating whether the button is currently selected.
 * @returns The RadioButtonGroup component is returning a View component that contains multiple
 * TouchableOpacity components. Each TouchableOpacity component represents a radio button and includes
 * a label and a fill indicator.
 */
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
