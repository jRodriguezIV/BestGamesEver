import './NavBar.css'
import { Link } from 'react-router-dom'


export default function NavBar() {

    return ( 
       <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: "#F24822"}}>
        <div class="container-fluid">
        <Link class="navbar-brand" to="/"><strong>BestGamesEver</strong></Link>
        <Link to="/new" class="nav-link active">New</Link>
        </div>
       </nav>
    )
}