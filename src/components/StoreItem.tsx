import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({id, name, price, imgUrl}: StoreItemProps){
    const quantity = 3;
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
                    quantity === 0 ? <button className="add-btn">ADD TO CART</button> : 
                    <div className="adjust-btn-container">
                        <div className="adjust-btn">
                            <button className="adjust">-</button>
                            <p>{quantity} in cart.</p>
                            <button className="adjust">+</button>
                        </div>
                        <div className="remove-btn">
                            REMOVE
                        </div>
                    </div>
                }
            </div>
        </div>
        </>
    )
}