import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  // const removeItem = (id) => {
  //   let newPeople = people.filter((person) => person.id !== id);
  //   setPeople(newPeople);
  // };
  // ********or *****
  const removeItem = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      console.log(newPeople);
      return newPeople;
    });
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              clear item
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        clear button
      </button>
    </>
  );
};

export default UseStateArray;
