import { Link } from "react-router-dom"
import "./components.css"
export function Navbar(){
    return(
        <>
        <div className="nav-container">
            <div className="cart-container">
                <Link to="/cart" className="link" id="cart-btn">                
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div className="qty-container">
                            0
                    </div>
                </Link>
            </div>
            <div className="link-container">
                <Link className="link" to="/">HOME</Link>
                <Link className="link" to="/store">STORE</Link>
                <Link className="link" to="/about">ABOUT</Link>
            </div>
        </div>
        
        </>
    )
}