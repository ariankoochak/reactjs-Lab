import React, { useEffect, useState } from 'react'
import axios from 'axios'
import mStyle from './UserStyle.module.css'
import { useNavigate, Outlet ,useLocation} from "react-router-dom";

export default function Users() {
    const [users,setUsers] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const[pageNum,setPageNum] = useState(1)
    useEffect(()=>{
        window.removeEventListener("scroll", (e) => {
            // eslint-disable-next-line
            handleScroll();
        });
        window.addEventListener("scroll", (e) => {
            // eslint-disable-next-line
            handleScroll();
        });
        // eslint-disable-next-line
    },[pageNum])
    useEffect(()=>{
        const getData = (num) => {
            axios
                .get(
                    `https://rickandmortyapi.com/api/character/?page=${num}`
                )
                .then(function (response) {
                    setUsers([...users,...response.data.results]);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        getData(pageNum);
    },[pageNum])

    const handleLoadMoreUsers = ()=>{
        setPageNum(pageNum+1)
    }

    const handleScroll = ()=>{
        if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight) {
            handleLoadMoreUsers();
        } 
    }

    const handleClickUser = (id)=>{
        navigate(`/users/${id}`)
    }
    const selectedUser = (id)=>{
        const checkId = +(location.pathname.split("/")[2]);
        id = +id;
        if(checkId){
            return checkId === id ? mStyle.selectedUserStyle : mStyle.nonSelectedUserStyle
        }
    }
  return (
      <div style={{ display: "flex" }}>
          <div style={{ flex: "50% 1 0" }}>
              {users.map((user) => {
                  return (
                      <div key={user.id} className={`${mStyle.userStyle} ${selectedUser(user.id)}`} onClick={()=>{handleClickUser(user.id)}}>
                          <img src={user.image} alt={user.id} />
                          <h2>{user.name}</h2>
                      </div>
                  );
              })}
          </div>
          <div style={{ background: "white", flex: "50% 1 0"}}>
              <Outlet />
          </div>
      </div>
  );
}
