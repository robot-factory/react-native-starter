import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationTabScreenProps } from 'react-navigation-tabs'


class HomeScreen extends React.Component<NavigationTabScreenProps> {

  handleTurn = () => this.props.navigation.navigate('Settings')
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={this.handleTurn}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component<NavigationTabScreenProps> {
  handleToHome = () => this.props.navigation.navigate('Home')
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={this.handleToHome}
        />
      </View>
    );
  }
}

export const BottomTabNavigatorOption = {
  Home: HomeScreen,
  Settings: SettingsScreen,
}