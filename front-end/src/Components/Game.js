import { useNavigate } from "react-router-dom"

export default function Game({ game }) {

    const navigate = useNavigate()

    return (
            <span key={game.id} className="container mb-5 " style={{ backgroundColor: "#F24822" }}>
       <div className="row">
         <div className="col-lg-7 col-sm-1">
           <img  className="pt-5 pb-4" src={game.image} style={{ width: "500px" }} />
         </div>

         <div className="col-lg-4 col-sm-11 pt-5 " style={{backgroundColor:"rgb(194 191 191)", marginTop:"10rem"}}>
           <span style={{ backgroundColor: "rgb(194 191 191)" }}>
          <br />
            <p><span style={{color:"rgb(217 56 7)", fontSize:"larger"}}><strong>{game.name}</strong></span></p>
            
            

           </span>
         </div>
       </div>

       <div className="row">
               <div className="col mb-5 p-5 px-4" style={{backgroundColor:"rgb(194 191 191)", marginRight:"8.35%", marginLeft:"136px"}}>
                 <p>{game.game_description}</p>
                 <button type="button" className="btn btn-dark" onClick={() => navigate(`/${game.id}`)}>See More</button>
               </div>
             </div>
     </span>
    )
}