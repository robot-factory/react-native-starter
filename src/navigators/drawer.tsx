import React from 'react'
import { Image, Button, StyleSheet, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator, NavigationDrawerScreenProps, DrawerIconProps } from 'react-navigation-drawer'
import Chats from './chats-icon.png'
import Notif from './notif-icon.png'

class MyHomeScreen extends React.Component<NavigationDrawerScreenProps> {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }:DrawerIconProps) => (
      <Image
        source={Chats}
        style={[styles.icon, { tintColor: tintColor as string }]}
      />
    ),
  };

  turn = () => this.props.navigation.navigate('Notifications')
  openDrawer = () => this.props.navigation.openDrawer()
  closeDrawer = () => this.props.navigation.closeDrawer()

  render() {
    return (
      <View>
        <Button
          onPress={this.turn}
          title="Go to notifications"
        />
  
        <Button
          onPress={this.openDrawer}
          title="open"
        />
        <Button
          onPress={this.closeDrawer}
          title="close"
        />

      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component<NavigationDrawerScreenProps> {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }: DrawerIconProps) => (
      <Image
        source={Notif}
        style={[styles.icon, { tintColor: tintColor as string }]}
      />
    ),
  };

  back = () => this.props.navigation.goBack()
  openDrawer = () => this.props.navigation.openDrawer()
  closeDrawer = () => this.props.navigation.closeDrawer()

  render() {
    return (
      
      <View>
        <Button
        onPress={this.back}
        title="Go back home"
      />
  
        <Button
          onPress={this.openDrawer}
          title="open"
        />
        <Button
          onPress={this.closeDrawer}
          title="close"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp