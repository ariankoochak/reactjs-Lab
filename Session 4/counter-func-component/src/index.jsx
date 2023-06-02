import React from 'react';
import ReactDOM from 'react-dom/client';
import NumCounter from './Components/NumCounter';
import "./assets/style/style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <NumCounter defNum={0}></NumCounter>
        <NumCounter defNum={10}></NumCounter>
        <NumCounter defNum={100} buttonText = "اضافه"></NumCounter>
    </>
);

