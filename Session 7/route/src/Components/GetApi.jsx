import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default function GetApi() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<p>Main Page</p>} />
              <Route path="/shop" element={<p>shop Page</p>} />
              <Route path="/test" element={<p>test Page</p>} />
          </Routes>
      </BrowserRouter>
  );
}
