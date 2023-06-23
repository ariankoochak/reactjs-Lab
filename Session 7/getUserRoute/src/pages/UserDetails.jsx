import {React,useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

export default function UserDetails() {
    const {userID} = useParams();

    const [userdata, setUserData] = useState({})
    useEffect(()=>{
        fetch(`https://www.melivecode.com/api/users/${userID}`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setUserData(res.user);
            });
    },[userID])
  return (
      <>
          <p>{userdata.fname} {userdata.lname}</p><br />
          <p>{userdata.email}</p><br />
          <img src={userdata.avatar} alt={userdata.id}/>
      </>
  );
}
