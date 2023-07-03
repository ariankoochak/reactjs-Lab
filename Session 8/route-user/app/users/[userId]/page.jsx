'use client'

import getUser from '@/layouts/getUser';
import { useRouter } from 'next/navigation'
import Image from "next/image";
import React, { useEffect, useState } from 'react'

export default function page({params:{userId}}) {
    const router = useRouter();
    const [user,setUser] = useState({})
    useEffect(()=>{
        getUser(+userId,(datas)=>{setUser(datas)})
    },[])
    const handleClicked = ()=>{
        router.push('/users')
    }
    const renderuser = ()=>{
        if (Object.keys(user).length !== 0)
            return (
                <div>
                    <Image
                        src={user.image}
                        width={300}
                        height={300}
                        alt={user.name}
                    />
                    <h2>name : {user.name}</h2>
                    <h2>gender : {user.gender}</h2>
                    <h2>status : {user.status}</h2>
                    <h2>species : {user.species}</h2>
                </div>
            );
    }
  return (
      <>
        {renderuser()}
        <button onClick={handleClicked}>Back to Users</button>
      </>
  );
}
