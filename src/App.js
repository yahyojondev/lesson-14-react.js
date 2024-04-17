import "./App.css";
import Navbar from "./components/navbar/Navbar";
import bacgroundimg from "./assets/images/bacgroundimg.jpg";
import Increment from "./components/increment/Increment";
import Decrement from "./components/decrement/Decrement";
import Reset from "./reset/Reset";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="forms">
        <div className="input__wrapper">
          <Increment />
          <Decrement />
        </div>
        <Reset />
      </div>
    </div>
  );
}

export default App;
