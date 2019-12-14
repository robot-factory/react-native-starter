import React from 'react'
import { createAppContainer } from 'react-navigation';
import { View, Text, Button } from 'react-native'
import { createStackNavigator, NavigationStackScreenProps } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component<NavigationStackScreenProps> {
  toDetails = () => this.props.navigation.navigate('Details')
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={this.toDetails}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component<NavigationStackScreenProps> {
  toDetails = () => this.props.navigation.navigate('Details')

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={this.toDetails}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen,
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      Settings: SettingsStack,
    },
    {
      /* Other configuration remains unchanged */
    }
  )
);