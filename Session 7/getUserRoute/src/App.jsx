import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import NavBar from './components/NavBar/NavBar';
import UserDetails from './pages/UserDetails';

export default function App() {
  return (
      <>
          <BrowserRouter>
              <NavBar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/users/:userID" element={<UserDetails/>} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}
