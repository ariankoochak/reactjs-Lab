import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const helloStyle = {
  color : "white",
  fontSize : "50px",
  fontFamily : "arial",
}

root.render(
  <div style={helloStyle}>Hello world</div>
);

