// import React,{ Component } from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Hello from './pages/HelloPage'
import DetailPage from './pages/DetailPage'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: DetailPage,
    },
    Details: {
      screen: Hello,
    },
  },
  {
    initialRouteName: 'Home',
  },
)
const App = createAppContainer(RootStack)

export default App
