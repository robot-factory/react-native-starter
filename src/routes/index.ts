import Hello from '../pages/HelloPage'
import HomePage from '../pages/HomePage'
import Details from '../pages/DetailPage'
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