"use client";

import React from "react";
import homeIcon from "./home.svg";
import aboutIcon from "./about.svg";
import usersIcon from "./users.svg";
import homeSelectIcon from "./home-select.svg";
import aboutSelectIcon from "./about-select.svg";
import usersSelectIcon from "./users-select.svg";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();
    const router = useRouter();
    const handleClicked = (pageName)=>{
        router.push(`/${pageName}`)
    }
    return (
        <>
            <img src={pathname === '/' ? homeSelectIcon.src :  homeIcon.src} alt="home" onClick={()=>handleClicked('')}/>
            <img src={pathname === '/about' ? aboutSelectIcon.src :  aboutIcon.src} alt="about" onClick={()=>handleClicked('about')}/>
            <img src={pathname === '/users' ? usersSelectIcon.src :  usersIcon.src} alt="users" onClick={()=>handleClicked('users')}/>
        </>
    );
}
