import React, {useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from 'react-redux';

export default function UserDetails() {
    const [user,setuser] = useState({});
    const { userId } = useParams();
    const textColor = useSelector((state) => state.theme.textColor);
    const textStyles = {
        color: textColor,
    };
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
          <h1 style={textStyles}>Name : {user.uName}</h1>
          <h2 style={textStyles}>Location : {user.uLocation}</h2>
          <h2 style={textStyles}>Gender : {user.uGender}</h2>
          <h2 style={textStyles}>Species : {user.uSpecies}</h2>
          <h2 style={textStyles}>Origin : {user.uOrigin}</h2>
          <h2 style={textStyles}>status : {user.uStatus}</h2>
      </div>
  );
}
