import React, { useState } from "react";
import hide from './eye-fill.svg'
import show from './eye-slash-fill.svg'

export default function TextBox({ defValFromProps, onchange ,defaultShowState}) {
    let defaultValue = defValFromProps === undefined ? "" : defValFromProps;
    const [isShow ,setShow] = useState(defaultShowState)
    return (
        <>
            <input
                type={isShow ? "text" : "password"}
                defaultValue={defaultValue}
                onChange={onchange}
            />
            <button onClick={() => setShow(!isShow)}>
                <img src={isShow ? show : hide} alt="hello" />
            </button>
        </>
    );
}
