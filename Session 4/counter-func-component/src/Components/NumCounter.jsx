import React, { useState } from 'react'

export default function NumCounter(props) {
    const [num, setNum] = useState(props.defNum);
  return (
      <>
          <p>{num}</p>
          <button
              onClick={() => {
                  setNum(num + 1);
              }}
          >
              {props.buttonText ? props.buttonText : "Add"}
          </button>
      </>
  );
}
