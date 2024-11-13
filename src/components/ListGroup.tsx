import { useState } from "react";

function countryVisited() {
  const visitedRecently = ["Dubai 2023", "Singapore 2024", "Malaysia 2024"];

  const [selectedIndex, setSetSelectedIndex] = useState(-1);



  return (
    <>
      <h1>Country Visited..</h1> 
      <ul className="list-group">
        {visitedRecently.map((visited, index) => (
          <li key={visited} 
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            onClick={ ()=> {setSetSelectedIndex(index)} }
            >
            {visited}
          </li>
        ))}
      </ul>
    </>
  );
}

export default countryVisited;
