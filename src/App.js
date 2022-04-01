import logo from "./logo.svg";
import "./App.css";
import Home from "./assets/components/Home";
import AllBerer from "./assets/components/AllBerer";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        < path={"/beers"} element={<AllBerer/>
      </Routes>
    </div>
  );
}

export default App;
