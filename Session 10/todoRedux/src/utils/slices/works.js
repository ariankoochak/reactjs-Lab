import { createSlice } from "@reduxjs/toolkit";

export const worksSlice = createSlice({
    name: "works",
    initialState: {
        works: [],
    },
    reducers: {
        addWork: (state,action) => {
            const preObj = {
                title : action.payload.newWork,
                isDone : false
            }
            state.works.push(preObj)
        },
        deleteWork: (state,action) => {
            state.works = state.works.filter((work)=>{
                return work.title !== action.payload.workTitle
            })
        },
        toggleDoneWork: (state, action) => {
            state.works = state.works.map((work)=>{
                if(work.title === action.payload.workTitle)
                    work.isDone = !work.isDone
                return work
            })
        },
    },
});

// Action creators are generated for each case reducer function
export const { addWork, deleteWork, toggleDoneWork } = worksSlice.actions;

export default worksSlice.reducer;
