import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

export default function UserDetails() {
    const [user,setuser] = useState({});
    const { userId } = useParams();
    useEffect(()=>{
        axios
            .get(`https://rickandmortyapi.com/api/character/${userId}`)
            .then(function (response) {
                const { name, location, gender, species ,origin,status} = response.data;
                const userData = {
                    uName:name,
                    uLocation : location.name,
                    uGender : gender,
                    uSpecies : species,
                    uOrigin : origin.name,
                    uStatus : status,
                }
                setuser(userData)
            })
            .catch(function (error) {
                console.log(error);
            });
    },[userId])
  return (
      <div style={{position : "fixed"}}>
          <h1>Name : {user.uName}</h1>
          <h2>Location : {user.uLocation}</h2>
          <h2>Gender : {user.uGender}</h2>
          <h2>Species : {user.uSpecies}</h2>
          <h2>Origin : {user.uOrigin}</h2>
          <h2>status : {user.uStatus}</h2>
      </div>
  );
}
