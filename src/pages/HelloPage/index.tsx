import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

export interface Props {
  name?: string
  enthusiasmLevel?: number
  onIncrement?: () => void
  onDecrement?: () => void
}

interface State {
  enthusiasmLevel: number
}

@observer
export default class Hello extends React.Component<Props, State> {
  name='day'
  @observable
  count: number = 1

  constructor(props: Props) {
    super(props)

    if ((props.enthusiasmLevel || 0) < 0) {
      throw new Error('You could be a little more enthusiastic. :D')
    }

    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1,
    }
  }

  onIncrement = () => {
    this.setState({enthusiasmLevel: this.state.enthusiasmLevel + 1})
    this.count += 1
  }
  onDecrement = () => {
    this.setState({
      enthusiasmLevel: Math.max(0, this.state.enthusiasmLevel - 1),
    })
    this.count -= 1
  }
  getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!')

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello{' '}
          {this.name +
            this.getExclamationMarks(this.state.enthusiasmLevel)}
        </Text>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={this.onDecrement}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={this.onIncrement}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
        <View>
          <Text>So Sad({this.count})</Text>
        </View>
      </View>
    )
  }
}

// styles

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
})
