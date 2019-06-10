import * as reducers from './reducers'
import { createStore } from '..'
import { State } from './state'
import { combineReducers } from '..'

export const [Provider, useStore] = createStore(
  combineReducers(reducers),
  State
)
