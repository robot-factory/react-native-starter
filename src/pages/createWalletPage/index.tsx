import React from 'react'
import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  StyleSheet,
  Platform,
  Animated,
} from 'react-native'
import {NavigationStackScreenProps} from 'react-navigation-stack'
import {colors, fontStyles} from '@/styles/common'

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#fff',
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: Platform.OS === 'android' ? 20 : 25,
    marginTop: 20,
    marginBottom: 20,
    color: colors.fontPrimary,
    justifyContent: 'center',
    textAlign: 'center',
    ...fontStyles.bold,
  },
  field: {
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    position: 'absolute',
    marginTop: -35,
    marginLeft: 5,
    fontSize: 16,
    color: colors.fontSecondary,
    textAlign: 'left',
    ...fontStyles.normal,
  },
  input: {
    borderBottomWidth: Platform.OS === 'android' ? 0 : 1,
    borderBottomColor: colors.grey100,
    paddingLeft: 0,
    paddingVertical: 10,
    borderRadius: 4,
    fontSize: Platform.OS === 'android' ? 14 : 20,
    ...fontStyles.normal,
  },
  ctaWrapper: {
    marginTop: 20,
  },
  errorMsg: {
    color: colors.red,
    textAlign: 'center',
    ...fontStyles.normal,
  },
  seedPhrase: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    borderRadius: 10,
    minHeight: 110,
    height: 'auto',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.grey100,
    ...fontStyles.normal,
  },
  biometrics: {
    alignItems: 'flex-start',
    marginTop: 30,
    marginBottom: 30,
  },
  biometryLabel: {
    flex: 1,
    fontSize: 16,
    ...fontStyles.normal,
  },
  biometrySwitch: {
    marginTop: 10,
    flex: 0,
  },
  termsAndConditions: {
    paddingVertical: 30,
  },
  passwordStrengthLabel: {
    height: 20,
    marginLeft: 5,
    marginTop: 10,
    fontSize: 12,
    color: colors.fontSecondary,
    textAlign: 'left',
    ...fontStyles.normal,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  strength_weak: {
    color: colors.red,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  strength_good: {
    color: colors.blue,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  strength_strong: {
    color: colors.green300,
  },
  showHideToggle: {
    backgroundColor: colors.white,
    position: 'absolute',
    marginTop: 8,
    alignSelf: 'flex-end',
  },
  showMatchingPasswords: {
    position: 'absolute',
    marginTop: 8,
    alignSelf: 'flex-end',
  },
  qrCode: {
    marginTop: -50,
    marginBottom: 30,
    alignSelf: 'flex-end',
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.grey100,
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
})
class CreateWalletPage extends React.Component<NavigationStackScreenProps> {
  private mnemonicInput: TextInput | undefined
  constructor(props: NavigationStackScreenProps) {
    super(props)
    this.state = {text: ''}
  }
  endEditing(param: string) {
    console.log(param)
  }

  submiteContext(param: string) {
    console.log(param)
  }

  private mountMnemonicInput = (instance: TextInput) => {
    console.warn('mount input')
    this.mnemonicInput = instance
  }

  onPress() {
    if (this.mnemonicInput) {
      console.warn('blur')
      this.mnemonicInput.blur()
    }
  }

  handleEndEnterMnemonic = (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => {
    this.endEditing(
      // 退出键盘
      'onEndEditing text: ' + event.nativeEvent.text,
    )
  }

  handleSubmitEnterMnemonic = (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => {
    this.submiteContext(
      // 数据提交
      'onSubmitEditing text: ' + event.nativeEvent.text,
    )
  }

  handelOnChangeText = (text: string) => this.setState({text})

  render() {
    return (
      <View>
        <View>
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
            blurOnSubmit={true}
          />
        </View>
        <View style={styles.field}>
          <Animated.Text
            style={[
              styles.label,
              {
                transform: [
                  {scale: this.state.labelsScaleNew},
                  {translateX: labelsScaleNewX},
                  {translateY: labelsScaleNewY},
                ],
              },
            ]}>
            import_from_seed.new_password
          </Animated.Text>
          <TextInput
            ref={this.passwordInput}
            style={styles.input}
            testID={'input-password-field'}
            value={this.state.password}
            onChangeText={this.onPasswordChange} // eslint-disable-line  react/jsx-no-bind
            secureTextEntry={this.state.secureTextEntry}
            placeholder={''}
            placeholderTextColor={colors.grey100}
            underlineColorAndroid={colors.grey100}
            onSubmitEditing={this.jumpToConfirmPassword}
            returnKeyType={'next'}
            onFocus={() => this.animateOutLabel('new')} // eslint-disable-line  react/jsx-no-bind
            onBlur={() => this.animateInLabel('new')} // eslint-disable-line  react/jsx-no-bind
            autoCapitalize="none"
          />
        </View>
      </View>
    )
  }
}

export default CreateWalletPage
