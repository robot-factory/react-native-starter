import { observable, action } from 'mobx'

class RootStore {
  @observable
  count = 0

  @action
  add() {
    this.count++
  }

  @action
  minus() {
    this.count--
  }
}

export default RootStore