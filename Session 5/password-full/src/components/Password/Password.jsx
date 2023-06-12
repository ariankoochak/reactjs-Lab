import React, { useState ,useRef} from 'react'
import ShowIcon from './eye-fill.svg'
import HideIcon from './eye-slash-fill.svg'
import style from './passwordStyle.module.css'

export default function Password() {
    const [isShow,setIsShow] = useState(true);
    const [val,setValue] = useState('');
    const [strongRate,setStrongRate] = useState(0)
    const myInputElemet = useRef();
    const handleIsShow = ()=>{
        setIsShow(!isShow)
    }
    const handleGenerator = ()=>{
        let template = [];
        let pointer = 0;
        for(;pointer < 3;pointer++){
            template[pointer] = String(Math.floor(Math.random() * 10));
        }
        for (; pointer < 6; pointer++) {
            let c = Math.floor(Math.random() * 26);
            c += 97;
            template[pointer] = String.fromCharCode(c);
        }
        for (; pointer < 9; pointer++) {
            let c = Math.floor(Math.random() * 26);
            c += 65;
            template[pointer]= String.fromCharCode(c);
        }
        for (; pointer < 12; pointer++) {
            const ch = [
                "!",
                "@",
                "#",
                "$",
                "%",
                "^",
                "&",
                "*",
                "(",
                ")",
                "-",
                "+",
                "=",
                "<",
                ">",
                "/",
                ";",
                ":",
            ];
            let c = Math.floor(Math.random() * ch.length);
            template[pointer]=ch[c];
        }
        for (let i = template.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let t = template[i];
            template[i] = template[j];
            template[j] = t;
        }
        setValue(template.join(""));
        handleStrongRate(template.join(""));
        myInputElemet.current.focus();
    }
    const handleValue = (e)=>{
        setValue(e.target.value);
        handleStrongRate(e.target.value);
    }
    const handleStrongStyle = ()=>{
        let color = (strongRate >=12) ? ((strongRate >= 18) ? 'green' : 'yellow') : ((strongRate >= 6) ? 'orange' : 'red')
        let width = (strongRate * 10 <= 240) ? (strongRate * 10) : 240;
        let styleObject = {
            width: width,
            backgroundColor : color,
        };
        return styleObject;
    }
    const handleStrongRate = (pass)=>{
        let capFlag = 0;
        let lowFlag = 0;
        let charFlag = 0;
        let numFlag = 0;
        let len = pass.split("").length;
        for (let i of pass.split("")) {
            let num = i.charCodeAt(0);
            if (lowFlag === 0 && num <= 122 && num >= 97) lowFlag = 1;
            else if (capFlag === 0 && num <= 90 && num >= 65)
                capFlag = 1;
            else if (numFlag === 0 && num >= 48 && num <= 57)
                numFlag = 1;
            else if (charFlag === 0) charFlag = 1;
        }
        setStrongRate(
            len * ((lowFlag + capFlag + charFlag + numFlag) * 0.5)
        );
    }
    return (
        <>
            <input
                type={isShow ? "text" : "password"}
                className={style.inputStyle}
                value={val}
                onChange={handleValue}
                ref={myInputElemet}
            />
            <br />
            <button onClick={handleIsShow} className={style.eyeButtonStyle}>
                <img
                    src={isShow ? HideIcon : ShowIcon}
                    alt="eye"
                    className={style.eyeImageStyle}
                />
            </button>
            <br />
            <button
                onClick={handleGenerator}
                className={style.randomButtonStyle}
            >
                Generate Random Passowrd
            </button>
            <div
                className={`${style.strongStyle}`}
                style={handleStrongStyle()}
            ></div>
        </>
    );
}
