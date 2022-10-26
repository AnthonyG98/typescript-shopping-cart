import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}
type CartItem = {
    id: number
    quantity: number
}
type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}
const ShoppingCartContext = createContext({} as ShoppingCartContext);
export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({children} : ShoppingCartProviderProps){
    const [ cartItems, setCartItems ] = useState<CartItem[]>([]);
    function getItemQuantity(id: number){
        return cartItems.find(item => item.id === id) ?.quantity || 0
    }
    function increaseCartQuantity(id: number){
        setCartItems(currItems =>{
            if(currItems.find(items => items.id === id) == null){
                return [...currItems, {id, quantity: 1}]
            } else {
                return currItems.map(items =>{
                    if(items.id === id){
                        return {...items, quantity: items.quantity + 1}
                    } else {
                        return items
                    }
                })
            }
        })
    }
    function decreaseCartQuantity(id: number){
        setCartItems(currItems =>{
            if(currItems.find(items => items.id === id)?.quantity === 1){
                return currItems.filter(items => items.id !== id)
            } else {
                return currItems.map(items =>{
                    if(items.id === id){
                        return {...items, quantity: items.quantity - 1}
                    } else {
                        return items
                    }
                })
            }
        })
    }
    function removeFromCart(id: number){
        setCartItems(currItems =>{
            return currItems.filter(items => items.id !== id)
        })
    }
    return (
        <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}