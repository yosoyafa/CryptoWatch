import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import styles from './styles'

/**
 * The above function returns a loading page component with an activity indicator.
 */
const LoadingPage = (): JSX.Element => (
  <View style={styles.main}>
    <ActivityIndicator testID="spinner" />
  </View>
)

export default LoadingPage
