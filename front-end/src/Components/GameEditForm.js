import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function GameEditform() {
  const { id } = useParams();
  const [game, setGame] = useState({});
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
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateGame(game, id);
  };

  console.log(game.multiplayer);

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
          <label id="name" htmlFor="">
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

          <label id="multiplayer" htmlFor="">
            Multiplayer:&nbsp;&nbsp;
          </label>
          <input
            className="mb-2"
            id="multiplayer"
            value={game.multiplayer}
            onChange={handleCheckBoxChange}
            type="checkbox"
            style={{ width: "300px" }}
          />

          <br />

          <label id="genre" htmlFor="">
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

          <label id="cost" htmlFor="">
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

          <label id="release_date" htmlFor="">
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

          <label id="game_description" htmlFor="">
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
