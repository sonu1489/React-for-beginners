import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value >= 1) {
      document.title = `new Message ${value}`;
    }
  }, [value]); /**by apply value it will re - render after the value changes */

  useEffect(() => {
    console.log("second useEffect");
  }, []); /**it will only run on initional render because of [] */
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        increase
      </button>
    </>
  );
};

export default UseEffectBasics;
