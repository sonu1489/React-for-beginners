import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log("hello");
    // Cleanup function
    return () => {
      console.log("cleanup");
      window.removeEventListener("reize", checkSize);
    };
  }, []);
  return (
    <>
      <h1>window Width</h1>
      <h1>{size}px</h1>
    </>
  );
};

export default UseEffectCleanup;
