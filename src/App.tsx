import ListGroup from "./components/ListGroup";

function App() {

  let items = ["Dubai", "Malaysia", "Singapore", "Kryazstan"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  }
  
  return (
    <div>
      <ListGroup items={ items } heading="Trip Completed" onSelectItem={handleSelectedItem} />
    </div>
  );
}

export default App;
