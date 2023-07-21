import React from 'react'
import store from './utils/store'
import { Provider } from 'react-redux'
import Todo from './components/Todo'

export default function App() {
  return (
    <>
    <Provider store={store}>
      <Todo/>
    </Provider>
    </>
  )
}
