import { makeAutoObservable } from 'mobx'

class Index {

  login = ''

  constructor() {
    makeAutoObservable(this)
  }

  newLogin(login: string) {
    this.login = login
  }

}

export default new Index()