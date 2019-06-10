/*
 * @Author: saber2pr
 * @Date: 2019-06-10 16:16:16
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-10 16:16:16
 */
import React from 'react'
import { Store } from '@saber2pr/redux'
import { useContext } from 'react'
import { storeCtx } from './context'

export function createProvider<S>(store: Store<S>) {
  function Provider({ children }: { children: any }) {
    const ctx = useContext(storeCtx)
    if (!ctx.store) ctx.store = store

    return <>{children}</>
  }

  return Provider
}
