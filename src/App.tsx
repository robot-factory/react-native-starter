// import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {
  createStackNavigator,
  NavigationStackScreenProps,
  // StackView,
  // NavigationStackOptions
} from 'react-navigation-stack'
import { createBottomTabNavigator,NavigationBottomTabOptions } from 'react-navigation-tabs'
// import {routeConfigMap, stackConfig} from './routes'
import React from 'react'
// import {createAppContainer} from 'react-navigation'
// import {createStackNavigator} from 'react-navigation-stack'
// import {routeConfigMap, stackConfig} from './navigators'
// import { Provider } from 'mobx-react'
// import RootStore from './stores/root'

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
// const root = new RootStore()

// class WrappedApp extends Component {
//   render() {
//     return (
//       <Provider root={root}>
//         <App />
//       </Provider>
//     )
//   }
// }

// export default WrappedApp

// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

// import {BottomTabNavigatorOption} from './navigators/bottomTab'

// const TabNavigator = createBottomTabNavigator(BottomTabNavigatorOption);

// export default createAppContainer(TabNavigator);
// import { View, Text } from 'react-native'

// import Ionicons from 'react-native-vector-icons/Ionicons'
// import {createAppContainer} from 'react-navigation'
// import {createBottomTabNavigator} from 'react-navigation-tabs'

// interface IconWithBadgeProp {
//   name: string
//   badgeCount: number
//   color: string | undefined
//   size: number
// }

// class IconWithBadge extends React.Component<IconWithBadgeProp> {
//   render() {
//     const { name, badgeCount, color, size } = this.props;
//     return (
//       <View style={{ width: 24, height: 24, margin: 5 }}>
//         <Ionicons name={name} size={size} color={color} />
//         {badgeCount > 0 && (
//           <View
//             style={{
//               // If you're using react-native < 0.57 overflow outside of parent
//               // will not work on Android, see https://git.io/fhLJ8
//               position: 'absolute',
//               right: -6,
//               top: -3,
//               backgroundColor: 'red',
//               borderRadius: 6,
//               width: 12,
//               height: 12,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//           >
//             <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
//               {badgeCount}
//             </Text>
//           </View>
//         )}
//       </View>
//     );
//   }
// }

// const TabNavigator = createBottomTabNavigator(BottomTabNavigatorOption, {
//   defaultNavigationOptions: ({navigation}) => ({
//     tabBarIcon: ({focused, horizontal, tintColor}) => {
//       const {routeName} = navigation.state
//       // const IconComponent = Ionicons
//       let iconName = ''
//       if (routeName === 'Home') {
//         iconName = `ios-information-circle${focused ? '' : '-outline'}`
//         // Sometimes we want to add badges to some icons.
//         // You can check the implementation below.
//         // IconComponent = HomeIconWithBadge;
//       } else if (routeName === 'Settings') {
//         iconName = `ios-options`
//       }

//       // You can return any component that you like here!
//       return <IconWithBadge name={iconName} size={25} color={tintColor} badgeCount={10}/>
//     },
//   }),
//   tabBarOptions: {
//     activeTintColor: '#0f0',
//     inactiveTintColor: 'gray',
//   },
// })

// export default createAppContainer(TabNavigator)


// import Authentication from './navigators/authenticationFlow'

// export default Authentication
