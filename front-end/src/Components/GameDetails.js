import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function GameDetails() {
  const [game, setGame] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/games/${id}`)
      .then((response) => setGame(response.data))
      .catch((error) => console.warn("catch", error));
  }, []);

  const handleDelete = () => {
    deleteGame();
  };

  const deleteGame = () => {
    axios
      .delete(`${API}/games/${id}`)
      .then(
        () => {
          navigate(`/`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  console.log(game);

  return (
    <div
      className="row d-flex justify-content-center text-center"
      style={{ margin: "3rem 10%", paddingTop: "100px" }}
    >
      <span
        key={game.id}
        className="container mb-5 "
        style={{ backgroundColor: "#F24822" }}
      >
        <div className="row">
          <div className=" mt-5 col-lg-7 col-sm-1">
            <img
              className="pt-5 pb-4"
              src={game.image}
              style={{ width: "500px", top: "15%" }}
            />
          </div>

          <div
            className="col-lg-4 col-sm-11 pt-5 "
            style={{ backgroundColor: "rgb(194 191 191)", marginTop: "10rem" }}
          >
            <span style={{ backgroundColor: "rgb(194 191 191)" }}>
              <br />
              <p>
                <span style={{ color: "rgb(217 56 7)", fontSize: "larger" }}>
                  <strong>{game.name}</strong>
                </span>
              </p>

              <p>
                Cost:{" "}
                <span style={{ color: "rgb(217 56 7)" }}>
                  {game.cost === "0.00" ? "Free" : game.cost}
                </span>
              </p>
              <br />
              <p>
                Genre:{" "}
                <span style={{ color: "rgb(217 56 7)" }}>{game.genre}</span>
              </p>
              <br />
              <p>
                Release Date:{" "}
                <span style={{ color: "rgb(217 56 7)" }}>
                  {game.release_date}
                </span>
              </p>
              <br />
              <p>
                Multiplayer?{" "}
                <span style={{ color: "rgb(217 56 7)" }}>
                  {game.multiplayer ? "Yes" : "No"}
                </span>
              </p>
            </span>
          </div>
        </div>

        <div className="row">
          <div
            className="col mb-5 p-5 px-4"
            style={{
              backgroundColor: "rgb(194 191 191)",
              marginRight: "8.35%",
              marginLeft: "136px",
            }}
          >
            <p>{game.game_description}</p>
            <button
              onClick={() => navigate(`/${id}/edit`)}
              type="button"
              className="btn btn-dark"
              style={{
                marginRight: "70%",
                marginTop: "5%",
                marginBottom: "-3%",
              }}
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              type="button"
              className="btn btn-dark"
              style={{ marginTop: "5%", marginBottom: "-3%" }}
            >
              Delete
            </button>
          </div>
        </div>
      </span>
    </div>
  );
}
