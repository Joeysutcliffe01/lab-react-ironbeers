import { useState } from "react";
import { LayoutComponent } from "./LayoutComponent";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeers() {
  useEffect(() => {
    getBeerData();
  }, []);
  const [beerData, setBeerData] = useState([]);
  const getBeerData = async () => {
    const responseFromData = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers"
    );
    // console.log(responseFromData.data)
    setBeerData(responseFromData.data);
    console.log(responseFromData.data);
  };
  return (
    <>
      <LayoutComponent />

      {/* <button onClick={addBeer}>Add Random Beer</button> */}
      <div className="beer-container">
        {beerData.map((element) => {
          return (
            <div className="beer-card">
              <img
                className="beer-img"
                src={element.image_url}
                alt={element.name}
              />
              <div className="beer-info" key={element.name}>
                <Link to={"/beers/" + element._id}>
                  <h3> {element.name}</h3>

                  <h4>{element.tagline}</h4>
                  <h5>{element.contributed_by}</h5>
                </Link>
              </div>
            </div>
          );
        })}
        {/* console.log(element.image) */}
      </div>
    </>
  );
}

export default AllBeers;
