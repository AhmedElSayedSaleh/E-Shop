import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  totalQuantity: localStorage.getItem("totalQuantity")
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0,
  totalCost: localStorage.getItem("totalCost")
    ? +JSON.parse(localStorage.getItem("totalCost"))
    : 0,
};

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             const { product } = action.payload;
//             const { cartItems } = state
//             const existingItem = cartItems.find(item => item.id === product.id)
//             if (existingItem) {
//                 existingItem.quantity += 1
//                 existingItem.total = existingItem.quantity * existingItem.price
//             } else {
//                 const newItem = { ...product, quantity: 1, total: product.
//                     price }
//                 state.cartItems.push(newItem)
//             }
//             state.total += product.price
//             console.log(state)
//         },
//         removeFromCart: (state, action) => {
//             const { product } = action.payload;
//             const { cartItems } = state
//             const existingItem = cartItems.find(item => item.id === product.id)
//             if (existingItem) {
//                 if (existingItem.quantity > 1) {
//                     existingItem.quantity -= 1
//                     existingItem.total = existingItem.quantity * existingItem.price
//                 } else {
//                     state.cartItems = cartItems.filter(item => item.id !== product.id)
//                 }
//                 state.total -= product.price
//             }
//         },
//         clearCart
//         : (state, action) => {
//             state.cartItems = []
//             state.total = 0
//         }
//     }
// })

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload; // {product: {id: 1, name: "name", price: 10}}
      const existingItem = state.cartItems.find(
        (item) => item.productId === product.productId
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.currentPrice;
        state.totalCost += existingItem.currentPrice;
        state.totalQuantity++;
        // console.log("totalCost:", state.totalCost);
        // console.log("totalQuantity:", state.totalQuantity);
      } else {
        state.cartItems.push({
          ...product,
          totalPrice: product.currentPrice,
          quantity: 1,
        });
        state.totalCost += product.currentPrice;
        state.totalQuantity++;
        // console.log("totalCost:", state.totalCost);
        // console.log("totalQuantity:", state.totalQuantity);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalCost", JSON.stringify(state.totalCost));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
    },

    removeFromCart: (state, action) => {
      const product = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== product.productId
      );
      state.totalCost -= product.totalPrice;
      state.totalQuantity -= product.quantity;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalCost", JSON.stringify(state.totalCost));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;
