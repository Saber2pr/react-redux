# @saber2pr/react-redux

> react-redux

```bash
# from npm
npm install @saber2pr/react-redux

# from github
git clone https://github.com/Saber2pr/react-redux.git
```

# Why

社区不断地在改进 redux ，其根本原因就是，store.subscribe 这部分本应该由内部完成，而不是手动绑定 setState.

其实本来 store 作为全局变量就可以了，但是由于 store.subscribe 绑定 setState 的操作
必须在 Component 内部进行(如果不用 Hook API 封装)，会有很多 store.subscribe(setState)的代码。
所以需要解决掉这个 subscribe

```tsx
import { createStore, combineReducers } from '@saber2pr/react-redux'

export const [Provider, useStore, store] = createStore(
  combineReducers(reducers),
  State
)

// useStore
const App = () => {
  const [{ month, day }, dispatch] = useStore()

  const add = () => dispatch({ type: 'addMonth', payload: 1 }) // 内置支持thunk

  return (
    <>
      month{month} day{day}
      <button onClick={add}>add</button>
    </>
  )
}

// Provider
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

---

## start

```bash
npm install
```

```bash
npm start

npm run dev

```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
