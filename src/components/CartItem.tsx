import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
type CartItemProps = {
    id: number
    quantity: number
}
export function CartItem({id, quantity}: CartItemProps){
    const {removeFromCart} = useShoppingCart();
    const item = storeItems.find(i => i.id === id);
    if(item == null) return null

    return(
        <div>
            <img src={item.imgUrl} />
        </div>
    )
}