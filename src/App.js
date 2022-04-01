import "./App.css";
import Home from "./components/Home";
import AllBeers from "./components/AllBeers";
import { Route, Routes } from "react-router-dom";
import RandomBeers from "./components/RandomBeers";
import NewBeers from "./components/NewBeers";

function App() {
  return (
    <div className="App">
      <Home />

      <Routes>
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beers" element={<RandomBeers />} />
        <Route path="/new-beers" element={<NewBeers />} />
      </Routes>
    </div>
  );
}

export default App;
