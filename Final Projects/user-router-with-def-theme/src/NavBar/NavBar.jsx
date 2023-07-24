import React, { useContext } from 'react'
import style from './NavBarStyle.module.css'
import { useNavigate, useLocation} from "react-router-dom";
import AboutIcon from '../components/Svgs/AboutIcon/AboutIcon';
import HomeIcon from '../components/Svgs/HomeIcon/HomeIcon';
import UsersIcon from '../components/Svgs/UsersIcon/UsersIcon';
import SettingIcon from '../components/Svgs/SettingIcon/SettingIcon';
import { styleContext } from '../utils/style';

export default function NavBar() {
    const optionalStyle = useContext(styleContext);
    const navigate = useNavigate();
    const loc = useLocation();
    const changePage = (path)=>{
        navigate(path)
    }
  return (
      <>            
      <div className={style.iconStyle} onClick={()=>{changePage('./')}}>
        <HomeIcon isSelected = {loc.pathname === '/' ? true : false} fill={optionalStyle.textColor}/>
      </div>
      <div className={style.iconStyle} onClick={()=>{changePage('./about')}}>
        <AboutIcon isSelected = {loc.pathname === '/about' ? true : false} fill={optionalStyle.textColor}/>
      </div>
        <div className={style.iconStyle} onClick={()=>{changePage('./users')}}>
        <UsersIcon isSelected = {loc.pathname === '/users' ? true : false} fill={optionalStyle.textColor}/>
      </div>
        <div className={style.iconStyle} onClick={()=>{changePage('./setting')}}>
        <SettingIcon isSelected = {loc.pathname === '/setting' ? true : false} fill={optionalStyle.textColor}/>
      </div>
      </>
  );
}