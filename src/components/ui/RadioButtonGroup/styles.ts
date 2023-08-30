import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  main: { gap: 16 },
  container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  border: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
  },
  label: {
    color: 'white',
    fontSize: 16,
  },
})
