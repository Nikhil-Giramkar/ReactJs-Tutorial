import "./App.css";
import Bank from "./components/Bank";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container my-3">
        <Bank />
      </div>
    </div>
  );
}

export default App;
