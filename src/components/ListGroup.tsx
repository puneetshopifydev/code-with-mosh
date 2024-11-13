import { useState } from "react";


function ListGroup() {
  let items = ["Dubai", "Singapore", "Malaysia", "Thailand", "Japan"];

  let [selectedIndex, setSelectedIndex] = useState(-1);


  let [counterCount, nowCount] = useState(0);

  return (
    <>
      <h1>Hello World!</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={ () => {setSelectedIndex(index);} }
          >
            {item}
          </li>
        ))}
      </ul>
      <button className="counter-button" onClick={ ()=> { nowCount(counterCount + 1) } }> {counterCount} </button>
    </>
  );
}

export default ListGroup;
