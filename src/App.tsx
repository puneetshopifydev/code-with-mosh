import ListGroup from "./components/ListGroup";

function App() {

  let items = ["Dubai", "Malaysia", "Singapore", "Kryazstan"];
  let itemss = ["England", "USA", "Europe", "Scotland"];
  
  return (
    <div>
      <ListGroup items={ items } heading="Trip Completed" />
      <ListGroup items={ itemss } heading="Upcoming Trip" />
    </div>
  );
}

export default App;
