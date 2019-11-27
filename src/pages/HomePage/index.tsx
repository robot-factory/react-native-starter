import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackView } from 'react-navigation-stack'

class HomePage extends StackView {
  static navigationOptions = {
    title: 'Home',
  }
  
  constructor(props: any) {
    super(props)
    console.warn()
  }
  componentDidMount() {
    console.warn('HomePage Did Mount')
  }
  componentWillUnmount() {
    console.warn('HomePage will unmount')
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Hello"
          onPress={() => this.props.navigation.navigate('Hello')}
        />
        <Button
          title="Go to Details"
          onPress={()=> this.props.navigation.navigate('Details')}
          />
      </View>
    );
  }
}

export default HomePage