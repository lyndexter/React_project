import { createReserved, deleteReserved, updateReserved } from "./Hardcode";

const changeItems = (state, action) => {
  let orders = { ...state.orders };
  orders[action.payload.id] = action.payload;
  return orders;
};

const deleteItem = (state, action) => {
  let orders = { ...state.orders };
  delete orders[action.payload.id];
  return orders;
};

const calculatePrice = (data) => {
  let sum = 0;
  for (let value of Object.values(data)) {
    sum += value.priceInUAH;
  }
  return sum;
};

const reducer = (state = {}, action) => {
  let orders;
  switch (action.type) {
    case "start":
      return { orders: [...state.orders, 1], totalPrice: 495 };
    case updateReserved:
    case createReserved:
      orders = changeItems(state, action);
      return {
        orders,
        totalPrice: calculatePrice(orders),
      };
    case deleteReserved:
      orders = deleteItem(state, action);
      return {
        orders,
        totalPrice: calculatePrice(orders),
      };
    default:
      return state;
  }
};

export default reducer;
