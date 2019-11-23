import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackView } from 'react-navigation-stack'

class DetailPage extends StackView {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

export default DetailPage