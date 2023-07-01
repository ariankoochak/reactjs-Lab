import React from "react";

export default async function page(props) {
    const rawRes = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${props.page}`
    );
    const datas = await rawRes.json();
    const users = datas.results.map((data) => {
        return (
            <>
                <div key={data.id}>
                    <h2>name : {data.name}</h2>
                    <h3>status : {data.status}</h3>
                    <h3>species : {data.species}</h3>
                    <h3>gender : {data.gender}</h3>
                </div>
                <br />
            </>
        );
    });
    return <div>{users}</div>;
}
