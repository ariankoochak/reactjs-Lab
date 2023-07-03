'use client'

import React, { useEffect, useState } from 'react'
import GetAndRenderData from "@/layouts/getData";
import getData from '@/layouts/getData';
import { useRouter } from "next/navigation";
import Image from 'next/image';


export default function page() {
    const router = useRouter();
  const [pageNumber,setPageNumber] = useState(1)
  const [users, setUsers] = useState([]);
  useEffect(() => {
      window.removeEventListener("scroll", (e) => {
          handleScroll();
      });
      window.addEventListener("scroll", (e) => {
          handleScroll();
      });
    getData(pageNumber, (datas) => {
        setUsers((users) => [...users, ...datas]);
    });
  }, [pageNumber]);
  const handleScroll = () => {
      if (
          window.innerHeight + window.pageYOffset >=
          document.body.scrollHeight
      ) {
          handleLoadMoreUsers();
      }
  };
    const handleLoadMoreUsers = () => {
        setPageNumber(pageNumber + 1);
    };
    const renderUsers = ()=>{
        return users.map((user) => (
            <div key={user.id} onClick={() => handleClicked(user.id)}>
                <Image
                    src={user.image}
                    width={100}
                    height={100}
                    alt={user.name}
                />
                <h2>name : {user.name}</h2>
                <h4>gender : {user.gender}</h4>
                <h4>origin : {user.origin.name}</h4>
            </div>
        ));
    }
    const handleClicked = (userId) => {
        router.push(`users/${userId}`);
    };
  return (<>
    {renderUsers()}
  </>)
}