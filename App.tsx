import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { MainStack } from './src/navigation'
import CryptoProvider from './src/context/CryptoContext'

const App = (): JSX.Element => {
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
