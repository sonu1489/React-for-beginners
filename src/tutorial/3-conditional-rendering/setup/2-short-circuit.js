import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  // const firstValue = text || 'hello world'; if (first is false then 'hello world 'is display only)
  // const secondValue = text && 'hello world';/**if first is true yhen the 'hello world display else not */

  return <h2>short circuit</h2>;
};

export default ShortCircuit;
