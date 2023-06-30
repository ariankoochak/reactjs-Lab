import Link from "next/link";

export default async function page() {
    const rawResponse = await fetch("https://rickandmortyapi.com/api/character")
    const users = await rawResponse.json();
    const datas = users.results;
  return (
    <>
    <div>
      {datas.map((user)=>{
        return <div key={user.id}>
          <img src={user.image}/>
          <Link href={'/users/'+user.id}>name : {user.name}</Link>
          </div>
      })}
    </div>
    </>
  )
}
