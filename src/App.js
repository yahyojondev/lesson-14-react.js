import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <h2>Redux Toolkit</h2>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
