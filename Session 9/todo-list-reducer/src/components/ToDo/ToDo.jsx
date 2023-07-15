import React, { useReducer } from 'react'
import reducer from './store/reducer'
import { initState } from './store/store'
import { addWork, changeNewWorkInput, deleteWork, toggleDoneWork } from './store/actions'

export default function ToDo() {
  const [state,dispatch] = useReducer(reducer,initState)
  const handleNewWorkInputChange = (e)=>{
    dispatch(changeNewWorkInput(e.target.value))
  }
  const handleSumbitForm = (e) =>{
    e.preventDefault();
    const isDuplicate = state.works.find(work=>{
      return work.title === state.newWork
    })
    if(!state.newWork)
      alert('please enter something')
    else if(isDuplicate)
      alert('your work is duplicate')
    else
      dispatch(addWork())
  }

  const handleDeleteWork = (workTitle)=>{
    dispatch(deleteWork(workTitle))
  }

  const handleToggleDoneWork = (workTitle)=>{
    dispatch(toggleDoneWork(workTitle));
  }

  const renderWorks = ()=>{
    return state.works.map((work) => (
        <li key={work.title} style={{color : work.isDone ? 'green' : 'black'}}>
            <button onClick={()=>{handleDeleteWork(work.title)}}>Delete</button>&emsp;
            {work.title}&emsp;
            <button onClick={()=>{handleToggleDoneWork(work.title)}}>{work.isDone ? "UnDone" : "Done"}</button>
        </li>
    ));
  }
  return (
    <>
    <form onSubmit={handleSumbitForm}>
      <input type="text" value={state.newWork} onChange={handleNewWorkInputChange}/>
      <button type='submit'>Add Work</button>
    </form>
    <ul>
      {renderWorks()}
    </ul>
    </>
  )
}
