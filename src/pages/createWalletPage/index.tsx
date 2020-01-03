import React from 'react';
import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  TouchableWithoutFeedback,
} from 'react-native';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class CreateWalletPage extends React.Component<NavigationStackScreenProps> {
  private mnemonicInput: TextInput | undefined
  constructor(props: NavigationStackScreenProps) {
    super(props);
    this.state = {text: ''};
  }
  endEditing(param: string) {
    console.log(param);
  }

  submiteContext(param: string) {
    console.log(param);
  }

  private mountMnemonicInput = (instance: TextInput) => {
    this.mnemonicInput = instance;
  }

  private onPress() {
    if (this.mnemonicInput) {
      this.mnemonicInput.blur();
    }
  }

  handleEndEnterMnemonic = (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => {
    this.endEditing(
      // 退出键盘
      'onEndEditing text: ' + event.nativeEvent.text,
    );
  }

  handleSubmitEnterMnemonic = (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => {
    this.submiteContext(
      // 数据提交
      'onSubmitEditing text: ' + event.nativeEvent.text,
    );
  }

  handelOnChangeText = (text: string) => this.setState({text})

  render() {
    return (
      <View>
        <KeyboardAwareScrollView
          // contentContainerStyle={styles.wrapper}
          // style={styles.mainWrapper}
          testID={'first-incoming-transaction-screen'}
          resetScrollToCoords={{x: 0, y: 0}}>
          <TouchableWithoutFeedback
            onPress={this.onPress}
            style={{backgroundColor: 'blue', width: '100%', height: 400}}>
            <Text>enter your mnemonic</Text>
            <TextInput
              ref={this.mountMnemonicInput}
              style={{
                height: 300,
                borderStyle: 'solid',
                borderColor: '#000',
                borderWidth: 1,
                marginTop: 100,
                marginLeft: 30,
                marginRight: 30,
              }}
              placeholder="输入内容"
              keyboardType={'default'} // 默认键盘类型
              multiline={true}
              autoCapitalize="none" // 取消首字母大写
              keyboardAppearance={'light'} // 键盘演示
              returnKeyType={'done'} // 代替 returnKeyType
              secureTextEntry={false} // 输入内容显示黑色圆点
              clearButtonMode={'while-editing'} // 输入框右边 x 按钮
              clearTextOnFocus={false} // 再次输入清空之前内容
              onChangeText={this.handelOnChangeText} // onChangeText 文本变化是会调用(处于edite状态)
              onEndEditing={this.handleEndEnterMnemonic}
              onSubmitEditing={this.handleSubmitEnterMnemonic}
            />
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default CreateWalletPage;
