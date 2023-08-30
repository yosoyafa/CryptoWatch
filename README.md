# Crypto Watch
## Table of Content:

- [Crypto Watch](#crypto-watch)
  - [Table of Content:](#table-of-content)
  - [About The App](#about-the-app)
  - [Video recording](#video-recording)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Approach](#approach)
  - [License](#license)

## About The App
 An initial Home screen shows the list of currencies and a search bar to filter the items. When tapping on an item of the list (currency) the app will show a details screen about it.
On the Home screen, the percentual change timespan can be changed by tapping on the timer icon (top-right corner).

## Video recording


## Technologies
- React Native
- React Navigation
- Context API
- TypeScript

## Setup
1. Download or clone the repository
2. Make sure you have your React Native development environment set up. (https://reactnative.dev/docs/environment-setup)
3. Run `yarn deps`
4. Run `yarn ios` or `yarn android`

To run the test suites: `yarn test`

## Approach
Used Context API and fetch calls to get currencies data from https://www.coinlore.com/cryptocurrency-data-api. The navigation is handled by [react-navigation](https://github.com/react-navigation/react-navigation). Icons are provided by [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) and TDD was possible thanks to [jest](https://github.com/jestjs/jest) and [react-native-testing-library](https://github.com/callstack/react-native-testing-library).

## License

This project is licensed under the MIT License.
