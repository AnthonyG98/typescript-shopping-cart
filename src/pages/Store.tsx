import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
    return(
        <div className="store-container">
            {
                storeItems.map(allItems =>(
                    <StoreItem {...allItems}/>
                    )
                )
            }
        </div>
    )
}