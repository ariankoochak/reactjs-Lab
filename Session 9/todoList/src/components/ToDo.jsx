import React, { useState } from 'react'

export default function ToDo() {
    const [works,setWorks] = useState([]);
    const [newWork,setNewWork] = useState('new work');
    const handleAddWork = (e)=>{
        e.preventDefault();
        let flag  = 0;
        for (let work of works){
            if(newWork === work.title){
                flag = 1
                break;
            }
        }
        if(!newWork)
            alert('please write something')
        else if(flag === 0 || works.length === 0){
            const workObj = {
                title : newWork,
                isFin : false,
            }
            setWorks([...works,workObj])
        }
        else
            alert('tekrari')
    }
    const handleDone = (doneWork)=>{
        setWorks(works.map(work=>{
            if(doneWork.title === work.title){
                work.isFin = doneWork.isFin ? false : true;
            }
            return work
        }));
    }
  return (
    <>
    <form onSubmit={handleAddWork}>
        <input type="text" value={newWork} onChange={(e)=>{setNewWork(e.target.value)}}/>
        <button type='submit'>Add</button>
    </form>
    {works.map(work=>{
        return <>
        <br /><br />
        <li key={work.title}>
            <button onClick={()=>setWorks(works.filter(innerWork => {return work.title !== innerWork.title}))}>DELETE</button>
            <p style={{color : work.isFin ? 'green' : 'black',}}>{work.title}</p>
            <button onClick={()=>handleDone(work)}>{work.isFin ? ' UnDone' : ' Done'}</button>
            </li>
        </>
            
    })}
    </>
  )
}
