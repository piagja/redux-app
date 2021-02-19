import { Reducer } from 'redux'
import { IState } from './types'

const INITIAL_STATE: IState = {
  users: []
}

const allUsers: Reducer<IState> = () => {
  return INITIAL_STATE
}

export default allUsers