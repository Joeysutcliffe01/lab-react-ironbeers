import { useState } from "react";
import { LayoutComponent } from "./LayoutComponent";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeers() {
  useEffect(()=> {
    getBeerData()
  }, [] )
  const [beerData, setBeerData] = useState([])
  const getBeerData = async() => {
    const responseFromData = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
    // console.log(responseFromData.data)
    setBeerData(responseFromData.data) 
    console.log(responseFromData.data)
  }
  return (
    <div>
      <LayoutComponent />
      {beerData.map((element) => {
        return(
        <> <div  key={element.name}>
        <Link to={'/beers/'+element._id }>

            <h3> {element.name}</h3>
            </Link>
        </div>
        
        <img
            className="beer"
            src={element.image_url}
            alt={element.name} />

            <h4>{element.tagline}</h4>
            <h5>{element.contributed_by}</h5>
            
            </>
          
         )
         
      })}
      {/* console.log(element.image) */}
    </div>
  );
}

export default AllBeers;
