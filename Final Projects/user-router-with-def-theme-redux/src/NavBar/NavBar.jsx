
import style from './NavBarStyle.module.css'
import { useNavigate, useLocation} from "react-router-dom";
import AboutIcon from '../components/Svgs/AboutIcon/AboutIcon';
import HomeIcon from '../components/Svgs/HomeIcon/HomeIcon';
import UsersIcon from '../components/Svgs/UsersIcon/UsersIcon';
import SettingIcon from '../components/Svgs/SettingIcon/SettingIcon';
import { useSelector } from 'react-redux';

export default function NavBar() {
    const navigate = useNavigate();
    const textColor = useSelector((state) => state.theme.textColor);
    const loc = useLocation();
    const changePage = (path)=>{
        navigate(path)
    }
  return (
      <>            
      <div className={style.iconStyle} onClick={()=>{changePage('./')}}>
        <HomeIcon isSelected = {loc.pathname === '/' ? true : false} fill={textColor}/>
      </div>
      <div className={style.iconStyle} onClick={()=>{changePage('./about')}}>
        <AboutIcon isSelected = {loc.pathname === '/about' ? true : false} fill={textColor}/>
      </div>
        <div className={style.iconStyle} onClick={()=>{changePage('./users')}}>
        <UsersIcon isSelected = {loc.pathname === '/users' ? true : false} fill={textColor}/>
      </div>
        <div className={style.iconStyle} onClick={()=>{changePage('./setting')}}>
        <SettingIcon isSelected = {loc.pathname === '/setting' ? true : false} fill={textColor}/>
      </div>
      </>
  );
}