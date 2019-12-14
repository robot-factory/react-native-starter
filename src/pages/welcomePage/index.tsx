import React, {Component} from 'react'
import {
  NavigationStackScreenProps,
  NavigationStackOptions,
} from 'react-navigation-stack'
import SafeAreaView from 'react-native-safe-area-view'
import {StatusBar, Text, StyleSheet, View, Platform, Button} from 'react-native'

import Swiper from 'react-native-swiper'
// ! Swiper use ComponentWillUpdate so the yellow warn show

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    height: 500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    height: 500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    height: 500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: 'yellow',
    fontSize: 30,
    fontWeight: 'bold',
  },
})

class SwiperComponent extends Component {
  render() {
    return (
      <View style={{height: 200, width: '100%'}}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          height={200}
          showsPagination={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    )
  }
}

const HeaderTitle: React.FC = () => (
  <Text
    style={{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 30,
    }}>
    Crypto World
  </Text>
)

class WelcomePage extends Component<NavigationStackScreenProps> {
  static navigationOptions: NavigationStackOptions = {
    // title: "Crypto World"
    headerTitle: HeaderTitle,
    headerStyle: {
      ...Platform.select({
        ios: {
          borderBottomWidth: 0,
          borderBottomColor: '#000',
        },
        android: {
          elevation: 0,
        },
      }),
    },
  }

  handleGetStart = () => {
    this.props.navigation.navigate('getStart')
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <SwiperComponent />
        <Button onPress={this.handleGetStart} title="Get Start" />
      </SafeAreaView>
    )
  }
}

export default WelcomePage
