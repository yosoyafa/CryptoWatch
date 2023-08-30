import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  main: {
    flex: 1,
    gap: 16,
    paddingVertical: 24,
    flexDirection: 'row',
  },
  imageContainer: {
    borderRadius: 28,
    borderWidth: 2.5,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#1D2B53',
  },
  image: {
    fontFamily: 'Courier',
    fontSize: 20,
    lineHeight: 26,
    color: '#FFFFFF',
  },
  infoContainer: {
    justifyContent: 'space-evenly',
  },
  number: { textAlign: 'center' },
  name: {
    color: '#BEBEBE',
    textTransform: 'capitalize',
  },
  symbol: { textAlign: 'center', textTransform: 'uppercase' },
  priceContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  price: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  percentageChangeContainer: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  percentageChange: {
    alignItems: 'center',
    fontSize: 14,
  },
})
