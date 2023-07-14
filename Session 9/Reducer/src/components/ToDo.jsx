
import React, { useReducer} from 'react'

function handleSit(myState,action){
    const newState = {...myState}
    switch (action.type) {
        case "minus":
            newState.counter--;
            break;
        case "plus":
            newState.counter++;
            break;
        case "changeCostumeVal":
            newState.costumeVal = action.costumeValue;
            break;
        case "costumeChange":
             newState.counter += +myState.costumeVal;
            break;
        default:
            console.log('error');
    }
    return newState
}

const initState = {
    counter : 0,
    costumeVal : '0',
}

export default function ToDo() {
    const [state,dispatch] = useReducer(handleSit,initState)
  return (
    <>
    <input type="text" value={state.costumeVal} onChange={(e)=>dispatch({type:"changeCostumeVal" ,costumeValue : e.target.value})}/>
    <button onClick={()=>{dispatch({type : 'costumeChange'})}}>{state.costumeVal}</button><br /><br />
    <button onClick={()=>{dispatch({type : 'minus'})}}>minus</button>
    {' '}{state.counter}{' '}
    <button onClick={()=>{dispatch({type : 'plus'})}}>plus</button>
    </>
  )
}
