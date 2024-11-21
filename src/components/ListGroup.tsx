import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function headerSection( { items, heading, onSelectItem } : ListGroupProps) {
  
  
  const [currentIndex, afterIndex] = useState(-1);

  return (
    <>
      <h1> { heading } </h1>
      <ul className="list-group">
        { items.length === 0 && <p>No Item Found</p> }
        {items.map((item, index) => (
          <li
            className={ currentIndex === index ? 'list-group-item active' : 'list-group-item' }
            key={item}
            onClick={() => {
              afterIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default headerSection;
