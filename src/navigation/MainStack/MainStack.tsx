import React from 'react'

import { Home, CoinDetails } from '../../screens'
import { MainStackParamList } from './types'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator<MainStackParamList>()

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
