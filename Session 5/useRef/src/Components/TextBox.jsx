import React, { useState , useRef } from "react";

export default function TextBox({ defValFromProps }) {
    let defaultValue = defValFromProps === undefined ? "" : defValFromProps;
    const [val, setVal] = useState(defaultValue);
    const [strongRate, setStrongRate] = useState(0);
    const myInputElemet = useRef();
    const [hello,setHello] = useState(0);
    const handleUpdate = (e) => {
            setVal(e.target.value);
            checkStrong(e.target.value);
    };
    const checkStrong = (myVal)=>{
        let capFlag = 0;
        let lowFlag = 0;
        let charFlag = 0;
        let numFlag = 0;
        let len = myVal.split("").length
        for(let i of myVal.split('')){
            let num = i.charCodeAt(0);
            if(lowFlag === 0 && num <= 122 && num >= 97)
                lowFlag = 1
            else if(capFlag === 0 && num <= 90 && num >= 65)
                capFlag = 1
            else if(numFlag === 0 && num <= 48 && num >= 57)
                numFlag = 1
            else if(charFlag === 0)
                charFlag = 1
        }
        setStrongRate(len*((lowFlag + capFlag + charFlag + numFlag) * 0.5))
    }

    const ShowStrong = ()=>{
        let s = strongRate/4;
        if(s <= 0)
            return ''
        else if(s <= 1)
            return '-'
        else if(s <= 2)
            return '--'
        else if(s <= 3)
            return '---'
        else 
            return '----'
    }

    const NumberGenerator = ()=>  {
        return String(Math.floor(Math.random() * 10));
    }

     const AlphaGenerator = ()=> {
        let c = Math.floor(Math.random() * 26);
        c += 97;
        return String.fromCharCode(c);
    }

     const BigAlphaGenerator = ()=> {
        let c = Math.floor(Math.random() * 26);
        c += 65;
        return String.fromCharCode(c);
    }

    const charachterGenerator = ()=>{
        const ch = ['!','@','#','$','%','^','&','*','(',')','-','+','='];
        let c = Math.floor(Math.random()*ch.length);
        return ch[c];
    }

    const randomGenerator = ()=>{
        let Dice = Math.floor(Math.random() * 4);
        switch (Dice) {
            case 0:
                return NumberGenerator();
            case 1:
                return AlphaGenerator();
            case 2:
                return BigAlphaGenerator();
            case 3:
                return charachterGenerator();
            default:
                return AlphaGenerator();
        }
    }

    const randomPass = ()=>{
        let template = '';
        for(let i = 1;i <= 12;i++){
            template += randomGenerator();
        }
        setVal(template)
        myInputElemet.current.focus();
    }

    const selectText = ()=>{
        myInputElemet.current.select();
    }



    return (
        <>
            <input ref={myInputElemet} type="text" value={val} onChange={handleUpdate} onFocus={selectText}/>
            <p>{ShowStrong()}</p>
            <button onClick={randomPass}>make random</button>
        </>
    );
}
