import React from 'react'
import store from './utils/store'
import { Provider } from 'react-redux'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'
import Comp4 from './components/Comp4'

export default function App() {
  return (
    <>
    <Provider store={store}>
      <Comp1/>
      <Comp2/>
      <Comp3/>
      <Comp4/>
    </Provider>
    </>
  )
}
