import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { isNil } from 'ramda'

type CoinProps = {
  symbol: string
  name: string
  price: string
  percentChange?: string
  borderColor: '#643367' | '#AF4B6E' | '#E77665'
  onPress?: () => void
}

const Coin = ({
  symbol,
  name,
  price,
  percentChange,
  borderColor,
  onPress,
}: CoinProps): JSX.Element => {
  const valueIncreased = isNil(percentChange)
    ? ''
    : percentChange[0] !== '-'

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.main]}
      testID="card"
      disabled={isNil(onPress)}
    >
      <View style={[styles.imageContainer, { borderColor }]}>
        <Text style={[styles.image]}>{symbol.substring(0, 3)}</Text>
      </View>
      <View style={[styles.infoContainer]}>
        <Text style={[styles.name]}>
          {name} <Text style={[styles.symbol]}>({symbol})</Text>
        </Text>
        <View style={[styles.priceContainer]}>
          <Text style={[styles.price]}>${price}</Text>
          {!isNil(percentChange) && (
            <View
              style={[
                styles.percentageChangeContainer,
                {
                  backgroundColor: valueIncreased
                    ? '#76FA8C'
                    : '#ED716D',
                },
              ]}
            >
              <Text style={[styles.percentageChange]}>
                {`${valueIncreased ? '+' : ''}${percentChange}%`}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Coin
