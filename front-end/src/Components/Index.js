import axios from "axios";
import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;

export default function Index() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/games`)
      .then((response) => setGames(response.data))
      .catch((error) => console.warn("catch", error));
  }, []);


if (games[0]) {


  return (
    <div
      className="row d-flex justify-content-center text-center"
      style={{ margin: "3rem 10%", paddingTop:"100px" }}
    >
      <span className="container mb-5 " style={{ backgroundColor: "#F24822" }}>
        <div className="row">
          <div className="col-lg-7 col-sm-1">
            <img  className="pt-5 pb-4" src={games[0].image} style={{ width: "500px" }} />
          </div>

          <div className="col-lg-4 col-sm-11 pt-5 mt-5 mr-5 " style={{backgroundColor:"#DBDBDB"}}>
            <span style={{ backgroundColor: "#DBDBDB" }}>
              <p>Cost: {games[0].cost === "0.00" ? "Free" : games[0].cost}</p>

            </span>
          </div>
        </div>

        <div className="row">
                <div className="col mb-5" style={{backgroundColor:"#DBDBDB", marginRight:"96px", marginLeft:"136px"}}>
                   Hello</div>
              </div>
      </span>

      <span className="container " style={{ backgroundColor: "#F24822" }}>
        hello
      </span>
    </div>
  );
}}
