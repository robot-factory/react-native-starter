import Hello from '../screens/HelloPage'
import HomePage from '../screens/HomePage'
import Details from '../screens/DetailPage'
import { SCEENS } from '../utils/constant'

export const routeConfigMap = {
  [SCEENS.HOME]: {
    screen: HomePage,
  },
  [SCEENS.DETAILS]: {
    screen: Details,
  },
  [SCEENS.HELLO]: {
    screen: Hello
  }
}

export const stackConfig = {
  initialRouteName: SCEENS.HOME,
}