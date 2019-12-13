import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import {SCEENS} from '../../utils/constant'
import { observer, inject } from 'mobx-react'
import RootStore from '../../stores/root'

// TODO: move to ./style.ts
const detailBg: StyleProp<ViewStyle> = {
  // height: 40,
  // width: 1000,
  backgroundColor: '#eee',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
})

interface Props extends NavigationStackScreenProps {
  root: RootStore
}

@inject('root')
@observer
class DetailsScreen extends React.Component<Props> {
  componentWillUnmount() {
    console.warn('DetailsScreen will unmount')
  }
  render() {
    return (
      <View style={detailBg}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate(SCEENS.DETAILS)}
        />
        <Button 
          title="Go to Home"
          onPress={()=> this.props.navigation.navigate(SCEENS.HOME)}
          />
        <Button
          title="Go back"
          onPress={()=> this.props.navigation.goBack()}
          />
        <Button
          title="Go to Hello"
          onPress={()=> this.props.navigation.navigate(SCEENS.HELLO)}
          />
        <Button
          title="add"
          onPress={()=> this.props.root.add()}
          />
          <Button
          title="minus"
          onPress={()=> this.props.root.minus()}
          />

        <Text>{this.props.root.count}</Text>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    )
  }
}

export default DetailsScreen
