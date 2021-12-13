import React from "react";

const ErrorExample = () => {
  let Title = "random Title";
  const handleClick = () => {
    Title = "heelo world";
    console.log(Title);
  };
  return (
    <React.Fragment>
      <h1>{Title}</h1>
      <button type="button" className="btn" onClick={handleClick}></button>
    </React.Fragment>
  );
};

export default ErrorExample;
