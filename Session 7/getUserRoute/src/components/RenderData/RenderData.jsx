import React, { useEffect, useState } from 'react'
import styleModule from './style.module.css'
import {Link} from 'react-router-dom'

export default function RenderData(props) {
    const [datas,setDatas] = useState([])
    useEffect(()=>{
        fetch(props.url)
            .then((res) => {
                return res.json();
            })
            .then((res) => renderData(res.data));
    },[props])
    const renderData =(data)=>{
      console.log(data)
      setDatas(data.map((user)=>{
        return (
            <div key={user.id} className={styleModule.divCard}>
                <img src={user.avatar} className={styleModule.imageCard} alt='avatar'/>
                <h1 className={styleModule.userCard}>{user.username}</h1>
                <h3 className={styleModule.nameCard}>{user.fname} {user.lname}</h3>
                <Link to={`/users/${user.id}`}>show details</Link>
            </div>
        );
      }))
    }
  return (
    <>
    {datas.length > 0 ? datas : "please wait"}
    </>
  )
}
