import { Link } from "react-router-dom"
import "./components.css"
export function Navbar(){
    return(
        <div className="nav-container">
            <Link className="link" to="/">HOME</Link>
            <Link className="link" to="/store">STORE</Link>
            <Link className="link" to="/about">ABOUT</Link>
        </div>
    )
}