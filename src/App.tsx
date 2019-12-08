// import React from 'react'
// import {createAppContainer} from 'react-navigation'
// import {createStackNavigator} from 'react-navigation-stack'
// import {routeConfigMap, stackConfig} from './navigators'
// import { Provider } from 'mobx-react'
// import RootStore from './stores/root'

// const RootStack = createStackNavigator(routeConfigMap, stackConfig)
// const App = createAppContainer(RootStack)

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


import Authentication from './navigators/authenticationFlow'

export default Authentication
