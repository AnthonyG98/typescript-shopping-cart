import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import { StoreItem } from "./StoreItem";
import storeItems from "../data/items.json"

export function ShoppingCart(){
    const {openCart, closeCart, cartItems} = useShoppingCart();
    return(
        <>
        <div className="nav-cart-container" id="nav-cart" onClick={()=>{openCart()}}>
            <div className="nav-cart-head">
                <h1 className="cart-head">CART</h1>
            </div>
            <div className="cart-content-container">
            {
                cartItems.map(items => (
                    <CartItem key={items.id} {...items}/>
                ))
            }
            </div>
            <div>
                Total {
                    formatCurrency(cartItems.reduce((total, cartItems)=>{
                        const item = storeItems.find(i => i.id === cartItems.id)
                        return total +( item?.price || 0) * cartItems.quantity
                    }, 0))
                }
            </div>
        </div>
        </>
    )
}