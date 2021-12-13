import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setISLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setISLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        setUser(data.login);
        setISLoading(false);
      })
      // .then((data) => {
      //   let users = data;
      //   let { login } = users;
      //   setUser(login);
      //   setISLoading(false);
      // console.log(users);
      // })
      .catch((error) => console.log(error));
  }, []);
  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>error</h1>
      </div>
    );
  }
  if (user) {
    return (
      <div>
        <h1>{user}</h1>
      </div>
    );
  }
  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
