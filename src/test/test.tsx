import React from 'react'
import ReactDOM from 'react-dom'
import { useStore, Provider } from './store'

const App = () => {
  const [{ month, day }, dispatch] = useStore()

  const add = () => dispatch({ type: 'addMonth', payload: 1 })

  return (
    <>
      month{month} day{day}
      <button onClick={add}>add</button>
    </>
  )
}

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
