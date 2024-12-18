import { useState } from "react";

const Items = ["Japan", "Malaysia", "Indonesia", "Singapore", "Dubai"];


function ListItems() {
  const [CurrentIndex, UpdateIndex] = useState(-0);
  return (
    <>
      <h1>Hello Items</h1>
      <ul className="list-group">
        {Items.map((item, index) => (
          <li key={item} className={ CurrentIndex === index ? 'list-group-item active': 'list-group-item' } onClick={ () => UpdateIndex(index) }>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListItems;
