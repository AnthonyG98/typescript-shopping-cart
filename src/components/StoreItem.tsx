import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({id, name, price, imgUrl}: StoreItemProps){
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    const quantity = getItemQuantity(id);
    return (
        <>
        <div className="store-prop-container">
            <div className="store-prop-img-container">
                <img src={imgUrl} className="store-prop-img" />
            </div>
            <div className="store-prop-info">
                <p className="prop-title">{name}</p>
                <p className="prop-price">{formatCurrency(price)}</p>
            </div>
            <div className="add-btn-container">
                {
                    quantity === 0 ? <button className="add-btn" onClick={()=> increaseCartQuantity(id)}>ADD TO CART</button> : 
                    <div className="adjust-btn-container">
                        <div className="adjust-btn">
                            <button className="adjust" onClick={()=> decreaseCartQuantity(id)}>-</button>
                            <p>{quantity} in cart.</p>
                            <button className="adjust" onClick={()=> increaseCartQuantity(id)}>+</button>
                        </div>
                        <div className="remove-btn" onClick={()=> removeFromCart(id)}>
                            REMOVE
                        </div>
                    </div>
                }
            </div>
        </div>
        </>
    )
}