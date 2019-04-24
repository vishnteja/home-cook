import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  //   ADD_SHIPPING,
  LOAD_DATA,
  LOAD_DATA_FILTERED,
  CHECKOUT,
  LOAD_ORDERS,
  UPDATE_ORDERS
} from "../constants/cart-actions";

//add cart action
export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};
//remove item action
export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};
//subtract qt action
export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id
  };
};
//add qt action
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id
  };
};

//load data first time
export const loadData = item_arr => {
  return {
    type: LOAD_DATA,
    item_arr
  };
};

// load filtered data
export const loadFilteredData = id_arr => {
  return {
    type: LOAD_DATA_FILTERED,
    id_arr
  };
};

// Checkout Cart
export const checkout = arg => {
  return {
    type: CHECKOUT,
    arg
  };
};

// Load Orders
export const loadOrders = order_arr => {
  return {
    type: LOAD_ORDERS,
    order_arr
  };
};

// Update Orders
export const updateOrders = new_order_arr => {
  return {
    type: UPDATE_ORDERS,
    new_order_arr
  };
};
