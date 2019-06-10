/*
 * @Author: saber2pr
 * @Date: 2019-06-10 16:12:34
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-10 16:52:41
 */
import React, { Reducer } from 'react'
import {
  createStore as makeStore,
  AnyAction,
  Middleware
} from '@saber2pr/redux'
import { API } from './type'
import { createProvider } from './createProvider'
import { useStore } from './useStore'

export function createStore<S>(
  reducer: Reducer<S, AnyAction>,
  state: S,
  ...middlewares: Middleware[]
): [React.FunctionComponent, API<S>] {
  const store = makeStore(reducer, state, ...middlewares)

  return [createProvider(store), useStore]
}
