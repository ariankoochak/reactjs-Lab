import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/style/style.css"
import LiveInput from './Components/LiveInput';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <LiveInput textForPlaceHolder = "Enter Pass" onChangeLog ={(val)=>{console.log(val)}}></LiveInput>
    </>
);

