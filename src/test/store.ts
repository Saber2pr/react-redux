import * as reducers from './reducers'
import { createStore } from '..'
import { State } from './state'
import { combineReducers } from '..'

export const [Provider, useStore, store] = createStore(
  combineReducers(reducers),
  State
)
