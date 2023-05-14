import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
const API = process.env.REACT_APP_API_URL

export default function GameDetails() {
    const [game, setGame] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios
        .get(`${API}/games/${id}`)
        .then((response) => setGame(response.data))
        .catch((error) => console.warn("catch", error))
    }, [])

    console.log(game)

    return (

        <div>
            <p>Game Details</p>
        </div>
    )
}