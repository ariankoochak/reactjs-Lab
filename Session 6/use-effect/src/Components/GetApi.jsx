import React, { useEffect, useState } from "react";

export default function Stars() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setUsers(res.results);
            });
    }, []);
    const showUsers = users.map((user) => {
        return (
            <div key={user.id}>
                <p>{user.name}</p>
                <img src={user.image} alt={user.name} />
            </div>
        );
    });
    return <>{showUsers}</>;
}
