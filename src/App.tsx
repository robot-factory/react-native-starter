// import React,{ Component } from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {routeConfigMap, stackConfig} from './routes'

const RootStack = createStackNavigator(routeConfigMap, stackConfig)
const App = createAppContainer(RootStack)

export default App
