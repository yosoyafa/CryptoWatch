import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

/* The code is defining a functional component called `InfoLabel`. This component takes in two props:
`label` and `info`. The `label` prop is expected to be a string, and the `info` prop can be either a
string or a number. */
const InfoLabel = ({
  label,
  info,
}: {
  label: string
  info: string | number
}) => (
  <Text style={[styles.label]} testID="label">
    {label}: <Text style={[styles.info]}>{info}</Text>
  </Text>
)

export default InfoLabel
