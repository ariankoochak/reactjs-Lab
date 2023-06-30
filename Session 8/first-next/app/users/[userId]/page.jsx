import React from 'react'

export default async function ({params:{userId}}) {
    const rawResponse = await fetch("https://rickandmortyapi.com/api/character/"+userId)
    const user = await rawResponse.json();
  return (
      <>
          <h4> name: {user.name}</h4>
          <h4>status: {user.status}</h4>
          <h4>gender: {user.gender}</h4>
          <h4>species: {user.species}</h4>
      </>
  );
}
