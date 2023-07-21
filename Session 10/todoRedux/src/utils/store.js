import {configureStore} from '@reduxjs/toolkit'
import worksReducer from './slices/works'

export default configureStore({
    reducer : {
        works : worksReducer,
    }
})