import axios from "axios";
import { useEffect, useState } from "react";
import Game from "./Game";

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
        <Game key={game.id} game={game}/> 

     ))}

        {/* Add This to the GameDetails Component */}
 {/* <p>Cost: <span style={{color:"rgb(217 56 7)"}}>{game.cost === "0.00" ? "Free" : game.cost}</span></p> */}
             {/* <br />
             <p>Genre: <span style={{color:"rgb(217 56 7)"}}>{game.genre}</span></p>
             <br />
             <p>Multiplayer? <span style={{color:"rgb(217 56 7)"}}>{game.multiplayer ? "Yes": "No" }</span></p> */}
    </div>
  );
}}
