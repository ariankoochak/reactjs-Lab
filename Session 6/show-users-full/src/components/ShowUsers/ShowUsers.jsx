import React, { useState } from 'react'
import Pagination from '../Pagination/Pagination'
import SetPerPage from '../SetPerPage/SetPerPage';
import RenderData from '../RenderData/RenderData';

export default function ShowUsers() {
    const [selectedPage,setSelectedPage] = useState(1);
    const [userPerPage,setUserPerPage] = useState(5);
    const handleChangePageReq = (pageNum)=>{
        setSelectedPage(pageNum)
    }
    const handleUserPerPage = (perPage)=>{
        setUserPerPage(perPage)
        setSelectedPage(1);
    }
  return (
      <>
        <SetPerPage changeUserPerPage={handleUserPerPage} upp ={userPerPage}/><br/>
        <Pagination userCount={12} perPage={userPerPage} currentPage={selectedPage} changePage={handleChangePageReq}/>
        <RenderData url={`https://www.melivecode.com/api/users?page=${selectedPage}&per_page=${userPerPage}`}/>
      </>
  );
}
