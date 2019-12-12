import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {
  createStackNavigator,
  NavigationStackScreenProps,
  StackView,
  NavigationStackOptions
} from 'react-navigation-stack'
import { createBottomTabNavigator,NavigationBottomTabOptions } from 'react-navigation-tabs'
// import {routeConfigMap, stackConfig} from './routes'

// const RootStack = createStackNavigator(routeConfigMap, stackConfig)
// const App = createAppContainer(RootStack)

import SafeAreaView from 'react-native-safe-area-view'
import {StatusBar, Text, StyleSheet, Platform, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    color: '#eee',
  },
})

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#6a51ae'}}>
        <StatusBar barStyle="light-content" backgroundColor="yellow" />
        <Text style={{color: '#222', fontSize: 50}}>Light Screen</Text>
        {/* <Button
          // title="Next screen"
          // onPress={() => this.props.navigation.navigate('Screen2')}
          // color={isAndroid ? 'blue' : '#fff'}
        // /> */}
      </SafeAreaView>
    )
  }
}

class Screen1 extends React.Component<NavigationStackScreenProps> {
  render() {
    const isAndroid = Platform.OS === 'android'
    return (
      <SafeAreaView
        style={{
          backgroundColor: '#6a51ae',
          justifyContent: 'center',
          flex: 1,
          height: 100,
          alignItems: 'center',
        }}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text style={{color: '#fff'}}>Light Screen</Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Screen2')}
          color={isAndroid ? 'blue' : '#fff'}
        />
      </SafeAreaView>
    )
  }
}

class Screen2 extends React.Component<NavigationStackScreenProps> {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#ecf0f1', flex: 1, alignItems: 'center'}}>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        <Text style={{justifyContent: 'center'}}>Dark Screen</Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Screen1')}
        />
      </SafeAreaView>
    )
  }
}

const appStack = createStackNavigator(
  {
    Screen1: {
      screen: Screen1,
    },
    Screen2: {
      screen: Screen2,
    },
  },
  {
    headerMode: 'none',
  },
)

class Screen3 extends React.Component<NavigationStackScreenProps> {
  static navigationOptions:NavigationBottomTabOptions = {
    tabBarLabel: 'Home!',
  };

  render() {
    const isAndroid = Platform.OS === 'android'
    return (
      <SafeAreaView
        style={{
          backgroundColor: '#6a51ae',
          justifyContent: 'center',
          flex: 1,
          height: 100,
          alignItems: 'center',
        }}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text style={{color: '#fff'}}>Light Screen</Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Screen4')}
          color={isAndroid ? 'blue' : '#fff'}
        />
      </SafeAreaView>
    )
  }
}

class Screen4 extends React.Component<NavigationStackScreenProps> {
  static navigationOptions:NavigationBottomTabOptions = {
    tabBarLabel: 'Settings!',
    title: 'GO'
  };

  render() {
    const isAndroid = Platform.OS === 'android'
    return (
      <SafeAreaView
        style={{
          backgroundColor: '#6a51ae',
          justifyContent: 'center',
          flex: 1,
          height: 100,
          alignItems: 'center',
        }}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text style={{color: '#fff'}}>Light Screen</Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Home!')}
          color={isAndroid ? 'blue' : '#fff'}
        />
      </SafeAreaView>
    )
  }
}
// Screen3.navigationOptions.title = 'Hello'
const HomeStack = createStackNavigator({ Screen3}, {defaultNavigationOptions: {
  title: 'Welcome',
}} );
HomeStack.navigationOptions = {
  tabBarLabel: 'Home!',
};
const SettingsStack = createStackNavigator({ Screen4 });
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings!',
};
export default createAppContainer(
  createBottomTabNavigator({
    HomeStack,
    SettingsStack,
  })
)
// export default createAppContainer(appStack)
