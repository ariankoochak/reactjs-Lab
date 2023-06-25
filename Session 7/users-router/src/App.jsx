import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Users from './routes/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
export default function App() {
  return (
      <>
          <BrowserRouter>
              <NavBar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/users" element={<Users />}>
                      <Route path=":userId" element={<UserDetails/>} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </>
  );
}
