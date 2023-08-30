import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#101F49',
    gap: 16,
    paddingTop: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  searchBar: { marginHorizontal: 16 },
  list: { flex: 1 },
  listContent: {
    paddingHorizontal: 24,
  },
  columnWrapper: { justifyContent: 'space-between' },
  separator: {
    flex: 1,
    height: 2.5,
    width: '100%',
    backgroundColor: '#1D2B53',
    borderRadius: 90,
  },
})
