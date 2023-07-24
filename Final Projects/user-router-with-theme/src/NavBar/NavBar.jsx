import React from 'react'
import homeIcon from './home.svg'
import aboutIcon from "./about.svg";
import usersIcon from "./users.svg";
import settingIcon from './setting.svg'
import settingSelectIcon from './setting-select.svg'
import homeSelectIcon from "./home-select.svg";
import aboutSelectIcon from "./about-select.svg";
import usersSelectIcon from "./users-select.svg";
import style from './NavBarStyle.module.css'
import { useNavigate, useLocation} from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    const loc = useLocation();
    const changePage = (path)=>{
        navigate(path)
    }
  return (
      <>
          <img className={style.iconStyle} src={loc.pathname === '/' ? homeSelectIcon : homeIcon} alt="Home" onClick={()=>{changePage('./')}}/>
          <img className={style.iconStyle} src={loc.pathname === '/about' ? aboutSelectIcon : aboutIcon} alt="About" onClick={()=>{changePage('./about')}}/>
          <img className={style.iconStyle} src={loc.pathname === '/users' ? usersSelectIcon : usersIcon} alt="Users" onClick={()=>{changePage('./users')}}/>
          <img className={style.iconStyle} src={loc.pathname === '/setting' ? settingSelectIcon : settingIcon} alt="Users" onClick={()=>{changePage('./setting')}}/>
      </>
  );
}