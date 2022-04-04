import axios from "axios";
import { useState, useEffect } from "react";
import { LayoutComponent } from "./LayoutComponent";

function RandomBeers() {
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
    // console.log(responseFromData.data[1]);
    //   console.log(responseFromData);
  };

  const addrandomBeer = () => {
    setBeerData((oldBeerData) => {
      return [beerData[1], ...oldBeerData];
    });
  };
  return (
    <div>
      <LayoutComponent />
      <button onClick={addrandomBeer}>Add random beer</button>
    </div>
  );
}

export default RandomBeers;
