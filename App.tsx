import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { MainStack } from './src/navigation'
import CryptoProvider from './src/context/CryptoContext'

/**
 * The `App` function is a TypeScript React component that sets up the navigation container and wraps
 * the main stack with a crypto provider and a safe area view.
 * @returns The App component is returning a JSX element.
 */
const App = (): JSX.Element => {
  /* The `useEffect` hook is used to perform side effects in functional components. In this case, it is
  used to hide the splash screen when the component mounts. */
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <CryptoProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <MainStack />
        </SafeAreaView>
      </CryptoProvider>
    </NavigationContainer>
  )
}

export default App
