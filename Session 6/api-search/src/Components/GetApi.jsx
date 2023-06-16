import React, { useEffect, useState } from "react";

export default function Stars() {
    const [users, setUsers] = useState([]);
    const [filter,setFilter] = useState('')
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${filter}`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setUsers(res.results);
            });
    }, [filter]);
    let showUsers = []
   if(users){
        showUsers = users.map((user) => {
            return (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <img src={user.image} alt={user.name} />
                </div>
            );
        });
    }
    return <>
    <div>
        <input type="text" value={filter} onChange={(e)=>{setFilter(e.target.value)}} />
    </div>
    {showUsers}</>;
}
