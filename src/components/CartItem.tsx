import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"
type CartItemProps = {
    id: number
    quantity: number
}
export function CartItem({id, quantity}: CartItemProps){
    const {removeFromCart} = useShoppingCart();
    const item = storeItems.find(i => i.id === id);
    if(item == null) return null

    return(
        <div className="cartItem-container">
            <img src={item.imgUrl} className="item-cart-img"/>
            <div className="cart-details">
                <h1 className="cart-head">{item.name}</h1>
                <p>x{quantity}</p>
                <p>{formatCurrency(item.price)}</p>
                <p>{formatCurrency(item.price * quantity)}</p>
                <button onClick={()=>{removeFromCart(item.id)}}>REMOVE</button>
            </div>
        </div>
    )
}