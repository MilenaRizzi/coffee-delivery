import { Item } from "./reducer";

export enum ActionTypes {
  ADD_NEW_ITEM = "ADD_NEW_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY",
  DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY",
  CHECKOUT_CART = "CHECKOUT_CART",
}

export function addNewItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      data: item,
    },
  };
}
