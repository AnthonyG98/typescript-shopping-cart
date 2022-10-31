import { Link } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import "./components.css"
export function Navbar(){
    const {openCart, cartQuantity} = useShoppingCart();
    return(
        <>
        <div className="nav-container">
            <div className="cart-container">
                <div to="/cart" className="link" id="cart-btn" onClick={openCart}>                
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div className="qty-container">
                            {cartQuantity}
                    </div>
                </div>
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