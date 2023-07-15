export const addWork = ()=>{return {type : 'ADD-WORK'}}
export const changeNewWorkInput = (newWork)=>{return {type : 'CHANGE-NEW-WORK-INPUT',payload : newWork}}
export const deleteWork = (workTitle)=>{return {type : 'DELETE-WORK',payload : workTitle}}
export const toggleDoneWork = (workTitle)=>{return {type : 'TOGGLE-DONE-WORK',payload : workTitle}}

