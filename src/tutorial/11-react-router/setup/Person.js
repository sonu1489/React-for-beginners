import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setName] = useState("default name");
  const { id } = useParams();
  useEffect(() => {
    const newPeople = data.find((person) => person.id === parseInt(id));
    setName(newPeople.name);
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <Link to="/People" className="btn">
        back to people
      </Link>
    </div>
  );
};

export default Person;
