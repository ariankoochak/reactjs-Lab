import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWork, deleteWork, toggleDoneWork } from "../utils/slices/works";
import { useRef } from "react";
import { useEffect } from "react";

export default function Todo() {
    const works = useSelector((state) => state.works.works);
    const dispatch = useDispatch();
    const [newWork, setNework] = useState("");
    const inp = useRef()
    useEffect(()=>{
        inp.current.focus();

    },[works])
    const handleAddWork = (e) => {
        // inp.current.focus();
        e.preventDefault();
        if (newWork === "") alert("enter Something");
        else {
            const isDup = works.findIndex((work) => {
                return work.title === newWork;
            });
            if (isDup === -1) {
                dispatch(addWork({ newWork }));
                setNework('')
            }
            else alert("is duplicate");
        }
    };
    const handleDoneWork = (workTitle) => {
        dispatch(toggleDoneWork({ workTitle }));
    };
    const handleDeleteWork = (workTitle) => {
        dispatch(deleteWork({ workTitle }));
    };
    return (
        <div>
            <form onSubmit={handleAddWork}>
                <input
                    type="text"
                    value={newWork}
                    onChange={(e) => setNework(e.target.value)}
                    ref={inp}
                />
                <button type="submit">Add Work</button>
            </form>
            <ul>
                {works.map((work) => {
                    return (
                        <li key={work.title}>
                            <p
                                style={{
                                    color: work.isDone ? "green" : "black",
                                }}
                            >
                                {work.title}
                            </p>
                            <button onClick={() => handleDoneWork(work.title)}>
                                {work.isDone ? "UnDone" : "Done"}
                            </button>
                            <button
                                onClick={() => handleDeleteWork(work.title)}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
