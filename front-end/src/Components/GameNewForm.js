import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const API = process.env.REACT_APP_API_URL

export default function GameNewForm() {
    const [game, setGame] = useState({
        name:"",
        multiplayer:"",
        genre:"",
        cost:"",
        release_date:"",
        game_description:"",
        image:""
    })
    const navigate = useNavigate()

    const handleTextChange = (event) => {
        setGame({...game,[event.target.id]:event.target.value})
    }

    const handleCheckBoxChange = () => {
        setGame({...game,multiplayer:!game.multiplayer})
    }

    const addGame = (newGame) => {
        axios
        .post(`${API}/games`, newGame)
        .then(
            () => {
                navigate(`/`)
            },
            (error) => console.error(error)
        ).catch((c) => console.warn("catch", c))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addGame(game)
    }

    return (
        <div
        className="row d-flex justify-content-center text-end"
        style={{ margin: "3rem 10% ", paddingTop: "100px", paddingRight:"15%" }}
      >

  
        <span className="row" style={{marginRight:"30%"}} >
         <form onSubmit={handleSubmit}>
  
          <label id="name" htmlFor="">Name:&nbsp;&nbsp;</label>
          <input 
          className="mb-2"
          id="name"
          value={game.name}
          onChange={handleTextChange}
          type="text"
          style={{width:"300px"}}
          placeholder="Name of game"
          required
           />
  
      <br />
  
      <label id="multiplayer" htmlFor="">Multiplayer:&nbsp;&nbsp;</label>
          <input 
          className="mb-2"
          id="multiplayer"
          value={game.multiplayer}
          onChange={handleCheckBoxChange}
          type="checkbox"
          style={{width:"300px"}}
          placeholder="True or False"
           />
  
      <br />
  
  <label id="genre" htmlFor="">Genre:&nbsp;&nbsp;</label>
          <input 
          className="mb-2"
          id="genre"
          value={game.genre}
          onChange={handleTextChange}
          type="text"
          style={{width:"300px"}}
          placeholder="Action, Horror, ..."
          required
           />
  
      <br />
  
  <label id="cost" htmlFor="">Cost:&nbsp;&nbsp;$</label>
          <input 
          className="mb-2"
          id="cost"
          value={game.cost}
          onChange={handleTextChange}
          type="text"
          style={{width:"300px"}}
          placeholder="0.00"
          required
           />
  
           <br />
  
           <label id="release_date" htmlFor="">Release Date:&nbsp;&nbsp;</label>
          <input 
          className="mb-2"
          id="release_date"
          value={game.release_date}
          onChange={handleTextChange}
          type="number"
          style={{width:"300px"}}
          placeholder="1993"
          required
           />
  
      <br />

      <label  id="image" htmlFor="">Image Link:&nbsp;&nbsp;</label>
          <input
          className="mb-2"
          id="image"
          value={game.image}
          onChange={handleTextChange}
          type="text"
          style={{width:"300px"}}
          placeholder="Image URL"
           />
  
      <br />
  
      <label  id="game_description" htmlFor="">Game Description:&nbsp;&nbsp;</label>
          <textarea
          id="game_description"
          value={game.game_description}
          onChange={handleTextChange}
          type="text"
          style={{width:"300px", height:"150px",resize:"none", overflow:"auto", verticalAlign:"middle"}}
          placeholder="Information about the game"
          required
           />
  
      <br />

  
      
  
  
          <br />
          <input className="btn btn-dark"  style={{marginRight:"15%"}} type="submit" />
         </form>
  
        </span>
      </div>
    )
}