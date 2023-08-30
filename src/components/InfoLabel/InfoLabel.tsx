import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

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
