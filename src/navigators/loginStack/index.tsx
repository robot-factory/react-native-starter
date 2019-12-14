import { createStackNavigator } from 'react-navigation-stack'
import WelcomePage from '../../pages/welcomePage'
import GetStartPage from '../../pages/getStartPage'
import CreateWalletPage from '../../pages/createWalletPage'

const LoginStack = createStackNavigator({
  welcome: {screen: WelcomePage},
  getStart: {
    screen: GetStartPage
  },
  createWallet: {
    screen: CreateWalletPage
  }

})

export default LoginStack