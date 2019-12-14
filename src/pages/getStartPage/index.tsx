import React from 'react'
import { View, Button } from 'react-native'
import { NavigationStackScreenProps } from 'react-navigation-stack'


class GetStartPage extends React.Component<NavigationStackScreenProps> {

  handleToCreate = () => {
    this.props.navigation.navigate('createWallet')
  }

  handleToImport = () => {
    this.props.navigation.navigate('import')
  }

  render() {
    return (
      <View>
        <Button title="Create Wallet" onPress={this.handleToCreate} />
        <Button title="Import Wallet" onPress={this.handleToImport} />
      </View>
    )
  }
}

export default GetStartPage