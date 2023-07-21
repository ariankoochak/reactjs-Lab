import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './slices/counter'

export default configureStore({
    reducer : {
        counter : counterReducer,
    }
})