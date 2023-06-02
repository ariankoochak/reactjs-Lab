import React, { useState } from "react";
import ErrorComponent from "./ErrorComponent";

export default function TextBox({ defValFromProps }) {
    let defaultValue = defValFromProps === undefined ? "" : defValFromProps;
    const [val, setVal] = useState(defaultValue);
    const [len, setLen] = useState(val.length);
    const handleUpdate = (e) => {
        if (len < 20 || len > e.target.value.length) {
            setVal(e.target.value);
            setLen(e.target.value.length);
        }
    };
    return (
        <>
            <input type="text" value={val} onChange={handleUpdate} />
            <p>{len}/20</p><br />
            {(len === 20 ? true : false) && <ErrorComponent errText={"bishtar az 20 ta nemishe"}/>}
        </>
    );
}
