export default function reducer(state,action){
    const newState = {...state}
    switch (action.type) {
        case "CHANGE-NEW-WORK-INPUT":
            newState.newWork = action.payload;
            break;
        case "ADD-WORK":
            newState.works.push({ title: newState.newWork, isDone: false });
            newState.newWork = "";
            break;
        case "DELETE-WORK":
            const workIndex = newState.works.findIndex((work) => {
                return work.title === action.payload;
            });
            newState.works.splice(workIndex, 1);
            break;
        case "TOGGLE-DONE-WORK":
            newState.works = newState.works.map((work)=>{
                if(work.title === action.payload)
                    work.isDone = !work.isDone
                return work
            })
            break;
        default:
            console.log("error in reducer function => action type switch case");
    }
    return newState;
}