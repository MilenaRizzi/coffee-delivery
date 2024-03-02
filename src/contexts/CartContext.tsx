import { ReactNode, createContext, useReducer, useState } from "react";
import { Item, Order, cartReducer } from "../reducers/cart/reducer";
import {  addNewItemAction } from "../reducers/cart/actions";
// import { coffees } from "../../data.json";


export const CartContext = createContext({} as CartContextType);


interface CartContexProviderProps {
  children: ReactNode;
}


interface CartContextType {
  cart: Item[]
  order: Order[]
  quantity: number;
  quantityDecrement: () => void;
  quantityIncrement: () => void;
  addItem: (item: Item) => void;
}

export function CartContextProvider({ children }: CartContexProviderProps) {
  
  const [quantity, setQuantity] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cartState, dispatch] = useReducer(cartReducer
    , {
    cart: [],
    order: []
  })

  const { cart, order } = cartState

  function quantityDecrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function quantityIncrement() {
    setQuantity(quantity + 1);
  }


  function addItem(item: Item) {
    dispatch(addNewItemAction(item))
  }

    // setCartCoffees([...cartCoffees, item])
  return (
    <CartContext.Provider
      value={{
        cart,
        order,
        quantityIncrement,
        quantityDecrement,
        addItem,
        quantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
