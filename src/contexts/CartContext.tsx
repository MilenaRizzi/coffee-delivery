import { ReactNode, createContext, useEffect, useReducer } from "react";
import { Item, Order, cartReducer } from "../reducers/cart/reducer";
import {
  addNewItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from "../reducers/cart/actions";
import { NewAddressFormData } from "../pages/Cart";
import { useNavigate } from "react-router-dom";
// import { coffees } from "../../data.json";

export const CartContext = createContext({} as CartContextType);

interface CartContexProviderProps {
  children: ReactNode;
}

interface CartContextType {
  cart: Item[];
  orders: Order[];
  addItem: (item: Item) => void;
  removeItem: (itemId: Item['id']) => void;
  decrementItemQuantity: (itemId: Item["id"]) => void;
  incrementItemQuantity: (itemId: Item["id"]) => void;
  checkout: (order: NewAddressFormData) => void;
}

export function CartContextProvider({ children }: CartContexProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return cartState;
    }
  );

  const { cart, orders } = cartState;
  const navigate = useNavigate();

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState);

      localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
    }
  }, [cartState]);

  function addItem(item: Item) {
    dispatch(addNewItemAction(item));
  }

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }

  function incrementItemQuantity(itemId: Item["id"]) {
    dispatch(incrementItemQuantityAction(itemId));
  }

  function decrementItemQuantity(itemId: Item["id"]) {
    dispatch(decrementItemQuantityAction(itemId));
  }

  function checkout(order: NewAddressFormData) {
    dispatch(checkoutCartAction(order, navigate));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addItem,
        removeItem,
        incrementItemQuantity,
        decrementItemQuantity,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
