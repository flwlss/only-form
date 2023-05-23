import { makeAutoObservable } from 'mobx'

class UserStore {

  login = ''

  constructor() {
    makeAutoObservable(this)
  }

  newLogin(login: string) {
    this.login = login
  }

}

export default new UserStore()