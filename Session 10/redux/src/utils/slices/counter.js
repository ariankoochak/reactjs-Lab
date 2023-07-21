import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        val: 0,
    },
    reducers: {
        add: (state) => {
            state.val += 1;
        },
        minus: (state) => {
            state.val -= 1;
        },
        addBy: (state, action) => {
            state.val += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { add, minus, addBy } = counterSlice.actions;

export default counterSlice.reducer;
