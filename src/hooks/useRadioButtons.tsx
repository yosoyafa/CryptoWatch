import React, { useState } from 'react'
import { RadioButton } from '../types'
import RadioButtonGroup from '../components/ui/RadioButtonGroup'
import { isEmpty, isNil } from 'ramda'

const useRadioButtons = ({ options }: { options: RadioButton[] }) => {
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
