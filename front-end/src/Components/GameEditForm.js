import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function GameEditform() {
  const { id } = useParams();
  const [game, setGame] = useState({
    name:"",
    multiplayer: false,
    genre:"",
    cost:"",
    release_date:"",
    game_description:"",
    image:""
  });
  const navigate = useNavigate();



  useEffect(() => {
    axios
      .get(`${API}/games/${id}`)
      .then((response) => setGame(response.data)
      ).catch((c) => console.warn("catch", c));
  }, [id]);

  const handleTextChange = (event) => {
    setGame({ ...game, [event.target.id]: event.target.value });
  };

  const handleCheckBoxChange = () => {
    setGame({ ...game, multiplayer: !game.multiplayer });
  };

  const updateGame = (updatedGame) => {
    axios
      .put(`${API}/games/${id}`, updatedGame)
      .then(
        () => {
          navigate(`/${id}`);
        },
        (error) => console.error(error)
    ).catch((c) => console.warn("catch",c))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateGame(game, id);
  };



  return (
    <div
      className="row d-flex justify-content-center text-end"
      style={{ margin: "3rem 10% ", paddingTop: "100px", paddingRight: "15%" }}
    >
      <img
        src={game.image}
        alt={game.name}
        className="p-3"
        style={{ width: "500px", marginLeft: "25%" }}
      />

      <span className="row" style={{ marginRight: "30%" }}>
        <form onSubmit={handleSubmit}>
          <label id="name" htmlFor="name">
            Name:&nbsp;&nbsp;
          </label>
          <input
            className="mb-2"
            id="name"
            value={game.name}
            onChange={handleTextChange}
            type="text"
            style={{ width: "300px" }}
            required
          />

          <br />

          <label id="multiplayer" htmlFor="multiplayer">
            Multiplayer:&nbsp;&nbsp;
          </label>
          <input
            className="mb-2"
            id="multiplayer"
            onChange={handleCheckBoxChange}
            type="checkbox"
            checked={game.multiplayer}
            style={{ width: "300px" }}
          />

          <br />

          <label id="genre" htmlFor="genre">
            Genre:&nbsp;&nbsp;
          </label>
          <input
            className="mb-2"
            id="genre"
            value={game.genre}
            onChange={handleTextChange}
            type="text"
            style={{ width: "300px" }}
            required
          />

          <br />

          <label id="cost" htmlFor="cost">
            Cost:&nbsp;&nbsp;$
          </label>
          <input
            className="mb-2"
            id="cost"
            value={game.cost}
            onChange={handleTextChange}
            type="text"
            style={{ width: "300px" }}
            required
          />

          <br />

          <label id="release_date" htmlFor="release_date">
            Release Date:&nbsp;&nbsp;
          </label>
          <input
            className="mb-2"
            id="release_date"
            value={game.release_date}
            onChange={handleTextChange}
            type="number"
            style={{ width: "300px" }}
            required
          />

          <br />

          <label id="game_description" htmlFor="game_description">
            Game Description:&nbsp;&nbsp;
          </label>
          <textarea
            id="game_description"
            value={game.game_description}
            onChange={handleTextChange}
            type="text"
            style={{
              width: "300px",
              height: "150px",
              resize: "none",
              overflow: "auto",
              verticalAlign: "middle",
            }}
            required
          />

          <br />

          <br />
          <input
            className="btn btn-dark"
            style={{ marginRight: "15%" }}
            type="submit"
          />
        </form>
      </span>
    </div>
  );
}
