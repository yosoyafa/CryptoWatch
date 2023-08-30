import React, { useRef } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { CoinDetailsScreenProps } from '../../navigation/MainStack/types'
import { formatCurency } from '../../utils'
import styles from './styles'
import { Coin, InfoLabel } from '../../components'
import Ionicons from 'react-native-vector-icons/Ionicons'

const CoinDetails = ({
  navigation,
  route,
}: CoinDetailsScreenProps): JSX.Element => {
  const {
    coin: {
      symbol,
      name,
      price_usd,
      percent_change_1h,
      rank,
      price_btc,
      percent_change_24h,
      percent_change_7d,
      market_cap_usd,
      volume24,
      csupply,
      tsupply,
      msupply,
    },
  } = route.params

  const scrollViewRef = useRef<ScrollView>(null)

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={[styles.titleContainer]}>
        <Ionicons
          name="chevron-back"
          size={28}
          color="#FFFFFF"
          onPress={() => {
            navigation.goBack()
          }}
        />
        <Text style={[styles.title]} testID="title">
          {name}
        </Text>
      </View>
      <View style={styles.main}>
        <Coin
          symbol={symbol}
          name={name}
          price={price_usd}
          borderColor={'#643367'}
        />
        <InfoLabel label="Rank" info={rank} />
        <InfoLabel label="Price (USD)" info={price_usd} />
        <InfoLabel label="Price (BTC)" info={price_btc} />
        <InfoLabel
          label="Percentage Change (1 hour)"
          info={`${percent_change_1h}%`}
        />
        <InfoLabel
          label="Percentage Change (24 hours)"
          info={`${percent_change_24h}%`}
        />
        <InfoLabel
          label="Percentage Change (7 days)"
          info={`${percent_change_7d}%`}
        />
        <InfoLabel
          label="Market Cap"
          info={formatCurency(market_cap_usd)}
        />
        <InfoLabel
          label="Trading Volume 24h"
          info={formatCurency(volume24)}
        />
        <InfoLabel label="Circulating Supply" info={csupply} />
        <InfoLabel label="Total Supply" info={tsupply} />
        <InfoLabel label="Max. Supply" info={msupply} />
      </View>
    </ScrollView>
  )
}

export default CoinDetails
