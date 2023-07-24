import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../slices/theme'

export default configureStore({
    reducer: {
        theme : themeReducer
    },
});
