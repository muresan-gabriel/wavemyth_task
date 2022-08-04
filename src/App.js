import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="main-container d-flex flex-column align-items-center">
        <Checkout></Checkout>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
