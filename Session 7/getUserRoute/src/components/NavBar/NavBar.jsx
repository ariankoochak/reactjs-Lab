import React from 'react'
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
      <>
          <Link to={"/"}>mainPage</Link><br />
          <Link to={"/shop"}>Shop</Link><br />
          <Link to={"/users"}>Users</Link><br />
      </>
  );
}
