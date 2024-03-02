import { NewAddressFormData } from "../../pages/Cart"


export interface Item {
  id: string
  quantity: number
}

export interface Order extends NewAddressFormData {
  id: number
  items: Item[]
}

interface CartState {
  cart: Item[]
  order: Order[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case'ADD_NEW_ITEM':
    return  {
    ...state,
      cart: state.cart.map((item) => {
        if(item.id === action.payload.item.id) {
          return item.quantity += action.payload.item.quantity
        } else {
          return item/*cart.push(action.payload.item)*/
        }
    }),
        
    }
  }
 
  return state
}