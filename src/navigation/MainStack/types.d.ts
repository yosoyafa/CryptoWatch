import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Coin } from '../../types'

export type MainStackParamList = {
  Home: undefined
  CoinDetails: {
    coin: Coin
  }
}

export type HomeScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Home'
>

export type CoinDetailsScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'CoinDetails'
>
