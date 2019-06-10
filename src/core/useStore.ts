/*
 * @Author: saber2pr
 * @Date: 2019-06-10 16:16:27
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-10 16:49:07
 */
import { API } from './type'
import { useContext, useState, useEffect } from 'react'
import { storeCtx } from './context'

export function useStore<S>(): ReturnType<API<S>> {
  const ctx = useContext(storeCtx)

  const [state, setState] = useState(ctx.store.getState())

  useEffect(() => ctx.store.subscribe(() => setState(ctx.store.getState())))

  return [state, ctx.store.dispatch]
}
