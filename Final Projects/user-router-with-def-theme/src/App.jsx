import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Users from "./routes/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";

import { styleContext, optionalStyle } from "./utils/style";
import Setting from "./routes/Setting/Setting";
export default function App() {
    const [theme, setTheme] = useState({...optionalStyle});
    const changeTheme = (textColor,borderColor,backgroundColor)=>{
        setTheme({textColor,borderColor,backgroundColor})
        document.body.style.backgroundColor = backgroundColor;
    }
    return (
        <>
            <styleContext.Provider value={theme}>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/users" element={<Users />}>
                            <Route path=":userId" element={<UserDetails />} />
                        </Route>
                        <Route path="/setting" element={<Setting onApply={(textColor,borderColor,backgroundColor)=>changeTheme(textColor,borderColor,backgroundColor)} />} />
                    </Routes>
                </BrowserRouter>
            </styleContext.Provider>
        </>
    );
}
