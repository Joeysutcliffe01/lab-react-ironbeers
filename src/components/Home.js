import { Link } from "react-router-dom";
import allBeersImg from "../assets/beers.png";
import randomBeersImg from "../assets/random-beer.png";
import newBeersImg from "../assets/new-beer.png";
// import { LayoutComponent } from "./LayoutComponent";

function Home() {
  return (
    <>
      <div className="home-beer-container">
        {/* <LayoutComponent /> */}
        <Link to={"/beers"}>
          <img src={allBeersImg} alt="Home" />
          <h1>All Beers</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </Link>
      </div>
      <div className="home-beer-container">
        {/* <LayoutComponent /> */}
        <Link to={"/random-beers"}>
          <img src={randomBeersImg} alt="Random Beers" />
          <h1>Random Beers</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </Link>
      </div>
      <div className="home-beer-container">
        {/* <LayoutComponent /> */}
        <Link to={"/new-beers"}>
          <img src={newBeersImg} alt="New Beers" />
          <h1>New Beers</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </Link>
      </div>
    </>
  );
}

export default Home;
