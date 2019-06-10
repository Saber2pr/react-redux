/*
 * @Author: saber2pr
 * @Date: 2019-06-10 16:16:20
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-10 16:16:20
 */
import React from 'react'
import { Store } from '@saber2pr/redux'

export const storeCtx = React.createContext<{ store: Store<any> }>({
  store: null
})
