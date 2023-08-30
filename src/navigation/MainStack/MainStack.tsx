import React from 'react'

import { Home, CoinDetails } from '../../screens'
import { MainStackParamList } from './types'
import { createStackNavigator } from '@react-navigation/stack'

/* This code is creating a stack navigator using the `createStackNavigator` function from the
`@react-navigation/stack` library. */
const Stack = createStackNavigator<MainStackParamList>()

/**
 * The MainStack function returns a Navigator component that contains two screens, Home and
 * CoinDetails, with the header hidden for both screens.
 * @returns The MainStack component is returning a Stack.Navigator component. Inside the
 * Stack.Navigator component, there are two Stack.Screen components being rendered. The first
 * Stack.Screen component is named "Home" and it renders the Home component. The options prop is set to
 * { headerShown: false }, which means the header will not be shown for this screen. The second
 * Stack.Screen component is named "CoinDetails" and it
 */
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CoinDetails"
        component={CoinDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default MainStack
