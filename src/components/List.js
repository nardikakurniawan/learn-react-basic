import React from "react";

function List(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li
          key={index}
          className="border-solid border border-gray-300 py-2 px-6 mt-2 rounded-md"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
