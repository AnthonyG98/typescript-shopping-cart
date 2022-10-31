import { useShoppingCart } from "../context/ShoppingCartContext"
import { CartItem } from "./CartItem";

export function ShoppingCart(){
    const {closeCart, cartItems} = useShoppingCart();
    return(
        <>
        <div className="nav-cart-container">
            <div className="nav-cart-head">
                <h1>CART</h1>
            </div>
            <div className="cart-content-container">
            {
                cartItems.map(items => (
                    <CartItem key={items.id} {...items}/>
                ))
            }
            </div>
        </div>
        </>
    )
}