/*
 * @Author: saber2pr
 * @Date: 2019-06-10 16:13:07
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-10 16:41:15
 */
import { Store } from '@saber2pr/redux'

export type API<S> = () => [S, Store<S>['dispatch']]
