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

console.log(games)
if (games[0]) {


  return (
    <div
      className="row d-flex justify-content-center text-center"
      style={{ margin: "3rem 10%", paddingTop:"100px" }}
    >
     {games.map((game) => (
       <span key={game.id} className="container mb-5 " style={{ backgroundColor: "#F24822" }}>
       <div className="row">
         <div className="col-lg-7 col-sm-1">
           <img  className="pt-5 pb-4" src={game.image} style={{ width: "500px" }} />
         </div>

         <div className="col-lg-4 col-sm-11 pt-5 " style={{backgroundColor:"rgb(194 191 191)", marginTop:"10rem"}}>
           <span style={{ backgroundColor: "rgb(194 191 191)" }}>
             <p>Cost: <span style={{color:"rgb(217 56 7)"}}>{game.cost === "0.00" ? "Free" : game.cost}</span></p>
             <br />
             <p>Genre: <span style={{color:"rgb(217 56 7)"}}>{game.genre}</span></p>
             <br />
             <p>Multiplayer? <span style={{color:"rgb(217 56 7)"}}>{game.multiplayer ? "Yes": "No" }</span></p>

           </span>
         </div>
       </div>

       <div className="row">
               <div className="col mb-5 p-5 px-10" style={{backgroundColor:"rgb(194 191 191)", marginRight:"96px", marginLeft:"136px"}}>
                 <p>{game.game_description}</p>
                 <button type="button" className="btn btn-dark">See More</button>
               </div>
             </div>
     </span>
     ))}

      {/* <span className="container " style={{ backgroundColor: "#F24822" }}>
        hello
      </span> */}
    </div>
  );
}}
