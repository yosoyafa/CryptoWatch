import React, { useRef } from 'react'
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './styles'

interface SearchBarProps extends TextInputProps {
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  style?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<TextStyle>
}

/**
 * The above code defines a SearchBar component in TypeScript React that renders a search icon and an
 * input field with placeholder text and allows the user to enter and search for text.
 * @param {SearchBarProps}  - - `value`: The current value of the search bar input.
 * @returns The SearchBar component is being returned as a JSX element.
 */
const SearchBar = ({
  value,
  onChangeText,
  placeholder,
  style,
  inputStyle,
  ...props
}: SearchBarProps): JSX.Element => {
  const inputRef = useRef<TextInput>(null)

  return (
    <View style={[styles.main, style]}>
      <Ionicons
        name="search"
        size={20}
        style={styles.icon}
        color="#707e82"
        onPress={() => inputRef.current?.focus()}
      />
      <TextInput
        testID="input"
        ref={inputRef}
        style={[inputStyle, styles.input]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#707e82"
        autoFocus
        {...props}
      />
    </View>
  )
}

export default SearchBar
