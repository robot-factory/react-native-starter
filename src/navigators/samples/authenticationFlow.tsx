import React from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  Button
  // StyleSheet,
} from 'react-native'
import {createAppContainer, createSwitchNavigator, NavigationSwitchScreenProps} from 'react-navigation'
import {createStackNavigator, NavigationStackScreenProps} from 'react-navigation-stack'

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.


class OtherScreen extends React.Component<NavigationStackScreenProps> {
  back = () => this.props.navigation.goBack()
  render() {
    return (
      <View>
        <Text>OtherScreen</Text>
        <Button
          onPress={this.back}
          title="Go back"
        />
        
      </View>
    )
  }
}

class SignInScreen extends React.Component<NavigationSwitchScreenProps> {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

class HomeScreen extends React.Component<NavigationSwitchScreenProps> {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <View>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

class AuthLoadingScreen extends React.Component<NavigationSwitchScreenProps> {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const AppStack = createStackNavigator({Home: HomeScreen, Other: OtherScreen})
const AuthStack = createStackNavigator({SignIn: SignInScreen})

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
)
