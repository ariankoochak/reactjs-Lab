'use client'

import React, { useEffect, useState } from 'react'
import GetAndRenderData from "@/components/GetAndRenderData/GetAndRenderData";

export default function page() {
  const [pageNumber,setPageNumber] = useState(1)
  useEffect(() => {
      window.removeEventListener("scroll", (e) => {
          handleScroll();
      });
      window.addEventListener("scroll", (e) => {
          handleScroll();
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
        console.log("test");
        setPageNumber(pageNumber + 1);
    };
  return (<>
        <GetAndRenderData page = {pageNumber}/>
  </>)
}

// https://rickandmortyapi.com/api/character/?page=19