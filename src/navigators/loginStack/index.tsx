import { createStackNavigator } from 'react-navigation-stack'
import WelcomePage from '../../pages/welcomePage'
import GetStartPage from '../../pages/getStartPage'

const LoginStack = createStackNavigator({
  welcome: {screen: WelcomePage},
  getStart: {
    screen: GetStartPage
  }

})

export default LoginStack