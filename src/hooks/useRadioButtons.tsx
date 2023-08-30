import React, { useState } from 'react'
import { RadioButton } from '../types'
import RadioButtonGroup from '../components/ui/RadioButtonGroup'
import { isEmpty } from 'ramda'

/**
 * The `useRadioButtons` function is a custom hook in TypeScript React that manages a group of radio
 * buttons and provides the selected option and a UI component for rendering the radio buttons.
 * @param  - The `options` parameter is an array of `RadioButton` objects. Each `RadioButton` object
 * has two properties: `label` (string) and `isSelected` (boolean).
 */
const useRadioButtons = ({ options }: { options: RadioButton[] }) => {
  /**
   * The function `getInitialOptions` takes an array of radio button options and returns a new array
   * with the same labels, but with the first option selected by default.
   * @param {RadioButton[]} options - An array of RadioButton objects.
   * @returns The function `getInitialOptions` returns an array of objects with properties `label` and
   * `isSelected`.
   */
  const getInitialOptions = (options: RadioButton[]) => {
    if (isEmpty(options)) {
      return []
    }

    let selectedindex = 0

    for (let index = 0; index < options.length; index++) {
      if (options[index].isSelected) {
        selectedindex = index
        break
      }
    }

    return options.map(({ label }, index) => ({
      label,
      isSelected: index === 0,
    }))
  }

  const [buttons, setButtons] = useState<RadioButton[]>(
    getInitialOptions(options)
  )

  const selectOption = (newLabel: string) =>
    setButtons(
      buttons.map(({ label }) => ({
        label,
        isSelected: label === newLabel,
      }))
    )

  const selectedOption = buttons.filter(
    ({ isSelected }) => isSelected
  )[0]

  const ButtonsUI = () => (
    <RadioButtonGroup
      buttons={buttons}
      setSelected={(newLabel: string) => selectOption(newLabel)}
    />
  )

  return {
    selectedOption,
    selectedLabel: selectedOption.label,
    RadioButtonGroup: ButtonsUI,
  }
}

export default useRadioButtons
