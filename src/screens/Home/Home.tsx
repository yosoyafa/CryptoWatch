import React, { useContext, useEffect, useState } from 'react'
import { FlatList, RefreshControl, Text, View } from 'react-native'
import styles from './styles'
import { HomeScreenProps } from '../../navigation/MainStack/types'
import {
  CryptoContext,
  CryptoContextType,
} from '../../context/CryptoContext'
import { isEmpty, isNil } from 'ramda'
import { Coin } from '../../components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useRadioButtons } from '../../hooks'
import {
  Button,
  LoadingPage,
  Modal,
  SearchBar,
} from '../../components/ui'

const Home = ({ navigation }: HomeScreenProps): JSX.Element => {
  const {
    coins,
    isLoading,
    fetchSingleCoin,
    fetchCoins,
    fetchMore,
    addCoin,
  } = useContext(CryptoContext) as CryptoContextType

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [showTimeSettings, setShowTimeSettings] =
    useState<boolean>(false)

  const onSearch = async (text: string) => {
    if (!isEmpty(text) && isEmpty(filteredCoins)) {
      const result = await fetchSingleCoin(text)
      if (!isNil(result)) {
        addCoin(result)
      }
    }
  }

  useEffect(() => {
    onSearch(searchTerm)
  }, [searchTerm])

  const filteredCoins = !isEmpty(searchTerm)
    ? coins.filter(
        ({ name, symbol, nameid }) =>
          name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
          nameid.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : coins

  const { selectedLabel, RadioButtonGroup } = useRadioButtons({
    options: [
      { label: '1 hour', isSelected: true },
      { label: '24 hours', isSelected: false },
      { label: '7 days', isSelected: false },
    ],
  })

  return (
    <>
      <View style={styles.main}>
        <View style={[styles.titleContainer]}>
          <Text style={[styles.title]}>Currencies</Text>
          <Button
            onPress={() => {
              setShowTimeSettings(true)
            }}
            icon={
              <Ionicons
                name="timer-outline"
                size={28}
                color="#FFFFFF"
              />
            }
          />
        </View>
        <SearchBar
          value={searchTerm}
          onChangeText={setSearchTerm}
          style={styles.searchBar}
          placeholder="Search"
          autoFocus={false}
          testID="searchBar"
        />
        <FlatList
          data={filteredCoins}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={[styles.separator]} />
          )}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={fetchCoins}
              colors={['#FFF']}
              tintColor={'#FFF'}
            />
          }
          ListEmptyComponent={<LoadingPage />}
          onEndReachedThreshold={0.6}
          onEndReached={fetchMore}
          renderItem={({ item: coin, index }) => {
            const {
              name,
              symbol,
              price_usd,
              percent_change_1h,
              percent_change_24h,
              percent_change_7d,
            } = coin

            const percentChange =
              selectedLabel === '1 hour'
                ? percent_change_1h
                : selectedLabel === '24 hours'
                ? percent_change_24h
                : percent_change_7d

            const colors = ['#643367', '#AF4B6E', '#E77665']

            const borderColor = colors[index % colors.length] as
              | '#643367'
              | '#AF4B6E'
              | '#E77665'

            return (
              <Coin
                onPress={() =>
                  navigation.navigate('CoinDetails', { coin })
                }
                symbol={symbol.toUpperCase()}
                name={name}
                price={price_usd}
                percentChange={percentChange}
                borderColor={borderColor}
              />
            )
          }}
          keyExtractor={(item) => item.name}
          style={styles.list}
        />
      </View>
      <Modal
        isVisible={showTimeSettings}
        onClose={() => {
          setShowTimeSettings(false)
        }}
        title="Change the percentual change timespan"
      >
        <RadioButtonGroup />
      </Modal>
    </>
  )
}

export default Home
