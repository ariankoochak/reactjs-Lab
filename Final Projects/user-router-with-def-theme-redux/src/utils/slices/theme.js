import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        textColor: "black",
        backgroundColor: "white",
        borderColor: "black",
    },
    reducers: {
        changeTheme: (state, action) => {
            state.textColor = action.payload.textColor;
            state.backgroundColor = action.payload.backgroundColor;
            state.borderColor = action.payload.borderColor;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
