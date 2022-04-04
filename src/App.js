import "./App.css";
import Home from "./components/Home";
import AllBeers from "./components/AllBeers";
import { Route, Routes } from "react-router-dom";
import RandomBeers from "./components/RandomBeers";
import NewBeers from "./components/NewBeers";
import { LayoutComponent } from "./components/LayoutComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beers" element={<RandomBeers />} />
        <Route path="/new-beers" element={<NewBeers />} />
      </Routes>
    </div>
  );
}

export default App;
