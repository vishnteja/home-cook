import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  LOAD_DATA,
  LOAD_DATA_FILTERED,
  CHECKOUT,
  LOAD_ORDERS,
  UPDATE_ORDERS
} from "../constants/cart-actions";
import axios from "axios";

var cart_n = 0;

const initState = {
  data: [],
  food_data: [],
  addedItems: [],
  total: 0,
  filtered_ids: [],
  error: "",
  orders: []
};

export default function(state = initState, action) {
  // LOAD DATA FIRST TIME
  if (action.type === LOAD_DATA) {
    var arr = [];
    for (var i = 1; i <= action.item_arr.length; i++) {
      arr.push(i);
    }
    return {
      ...state,
      food_data: action.item_arr,
      data: action.item_arr
    };
  }

  // LOAD SEARCHED ITEMS ONLY
  if (action.type === LOAD_DATA_FILTERED) {
    return {
      ...state,
      data: action.id_arr
    };
  }

  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.data.find(item => item._id === action.id);
    if (addedItem.count === 0) {
      console.log("Illegal Action");
      console.log(state.total);
      return {
        ...state,
        error: 1
      };
    }
    console.log(state.addedItems);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item._id);
    if (existed_item) {
      existed_item.count += 1;
      addedItem.count -= 1;
      return {
        ...state,
        total: state.total + addedItem.cost
      };
    } else {
      addedItem.count -= 1;
      let copy_item = { ...addedItem };
      copy_item.count = 1;
      copy_item.cid = cart_n;
      cart_n += 1;
      //calculating the total
      let newTotal = state.total + copy_item.cost;
      return {
        ...state,
        addedItems: [...state.addedItems, copy_item],
        total: newTotal
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item._id);
    let new_items = state.addedItems.filter(item => action.id !== item._id);

    //calculating the total
    let newTotal = state.total - itemToRemove.cost * itemToRemove.count0;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.addedItems.find(item => item._id === action.id);
    addedItem.count += 1;
    let newTotal = state.total + addedItem.cost;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.addedItems.find(item => item._id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item._id !== action.id);
      let newTotal = state.total - addedItem.cost;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    } else {
      addedItem.count -= 1;
      let newTotal = state.total - addedItem.cost;
      return {
        ...state,
        total: newTotal
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6
    };
  }

  if (action.type === CHECKOUT) {
    return {
      ...state,
      addedItems: []
    };
  }

  if (action.type === LOAD_ORDERS) {
    console.log(action.order_arr);
    return {
      ...state,
      orders: action.order_arr
    };
  }

  if (action.type === UPDATE_ORDERS) {
    let obj = action.new_order_arr;
    axios.put("/api/order/" + obj._id, obj).catch(err => console.log(err));
    return {
      ...state,
      orders: action.new_order_arr
    };
  }

  return state;
}
