import Button from "./Components/Button";

function App() {
  return (
    <div className="App">
      <Button />
      <Button disabled={true} />
      <Button value={'HOC'} />
      <Button value={'NEW'} />
    </div>
  );
}

export default App;
