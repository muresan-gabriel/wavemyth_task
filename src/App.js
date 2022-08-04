import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="main-container d-flex flex-column align-items-center">
        <Checkout></Checkout>
      </div>
    </div>
  );
}

export default App;
