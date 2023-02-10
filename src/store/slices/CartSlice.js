import { createSlice } from "@reduxjs/toolkit";
import { ref, set } from "firebase/database";
import { db } from "../../firebase/firebase";

const initialState = {
  // cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")): [],
  // totalQuantity: localStorage.getItem("totalQuantity")? JSON.parse(localStorage.getItem("totalQuantity")): 0,
  // totalCost: localStorage.getItem("totalCost")? +JSON.parse(localStorage.getItem("totalCost")): 0,
  cartItems: [],
  totalCost: 0,
  totalQuantity: 0,
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
    setUserCart: (state, action) => action.payload,
    addToCart: (state, action) => {
      const userId = action.payload.uid;
      const product = action.payload.product; // {product: {id: 1, name: "name", price: 10}}
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

      set(ref(db, `users/${userId}/cart/cartItems`), state.cartItems);
      set(ref(db, `users/${userId}/cart/totalCost`), state.totalCost);
      set(ref(db, `users/${userId}/cart/totalQuantity`), state.totalQuantity);

      //// get cart items from firestore database to local storage
      // onValue(ref(db, `users/${userId}/cart`), (snapshot) => {
      //   const data = snapshot.val();
      //   console.log(data.cartItems);
      //   localStorage.setItem("cartItems", JSON.stringify(data.cartItems));
      //   localStorage.setItem("totalCost", JSON.stringify(data.totalCost));
      //   localStorage.setItem(
      //     "totalQuantity",
      //     JSON.stringify(data.totalQuantity)
      //   );
      // });
    },

    removeFromCart: (state, action) => {
      const userId = action.payload.uid;
      const product = action.payload.product;
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== product.productId
      );
      state.totalCost -= product.totalPrice;
      state.totalQuantity -= product.quantity;

      set(ref(db, `users/${userId}/cart/cartItems`), state.cartItems);
      set(ref(db, `users/${userId}/cart/totalCost`), state.totalCost);
      set(ref(db, `users/${userId}/cart/totalQuantity`), state.totalQuantity);

      //// get cart items from firestore database to local storage
      // onValue(ref(db, `users/${userId}/cart`), (snapshot) => {
      //   const data = snapshot.val();
      //   console.log(data.cartItems);
      //   localStorage.setItem("cartItems", JSON.stringify(data.cartItems));
      //   localStorage.setItem("totalCost", JSON.stringify(data.totalCost));
      //   localStorage.setItem(
      //     "totalQuantity",
      //     JSON.stringify(data.totalQuantity)
      //   );
      // });
    },

    increaseCartQuantity: (state, action) => {
      const userId = action.payload.uid;
      const product = action.payload.product;
      const existingItem = state.cartItems.find(
        (item) => item.productId === product.productId
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.currentPrice;
        state.totalCost += existingItem.currentPrice;
        state.totalQuantity++;
      }

      set(ref(db, `users/${userId}/cart/cartItems`), state.cartItems);
      set(ref(db, `users/${userId}/cart/totalCost`), state.totalCost);
      set(ref(db, `users/${userId}/cart/totalQuantity`), state.totalQuantity);

      //// get cart items from firestore database to local storage
      // onValue(ref(db, `users/${userId}/cart`), (snapshot) => {
      //   const data = snapshot.val();
      //   console.log(data.cartItems);
      //   localStorage.setItem("cartItems", JSON.stringify(data.cartItems));
      //   localStorage.setItem("totalCost", JSON.stringify(data.totalCost));
      //   localStorage.setItem(
      //     "totalQuantity",
      //     JSON.stringify(data.totalQuantity)
      //   );
      // });
    },

    decreaseCartQuantity: (state, action) => {
      const userId = action.payload.uid;
      const product = action.payload.product;
      const existingItem = state.cartItems.find(
        (item) => item.productId === product.productId
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.currentPrice;
        state.totalCost -= existingItem.currentPrice;
        state.totalQuantity--;
      }
      // else if (existingItem.quantity === 1) {
      //   state.cartItems = state.cartItems.filter(
      //     (item) => item.productId !== product.productId
      //   );
      //   state.totalCost -= product.totalPrice;
      //   state.totalQuantity -= product.quantity;
      // }

      set(ref(db, `users/${userId}/cart/cartItems`), state.cartItems);
      set(ref(db, `users/${userId}/cart/totalCost`), state.totalCost);
      set(ref(db, `users/${userId}/cart/totalQuantity`), state.totalQuantity);

      //// get cart items from firestore database to local storage
      // onValue(ref(db, `users/${userId}/cart`), (snapshot) => {
      //   const data = snapshot.val();
      //   console.log(data.cartItems);
      //   localStorage.setItem("cartItems", JSON.stringify(data.cartItems));
      //   localStorage.setItem("totalCost", JSON.stringify(data.totalCost));
      //   localStorage.setItem(
      //     "totalQuantity",
      //     JSON.stringify(data.totalQuantity)
      //   );
      // });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseCartQuantity,
  decreaseCartQuantity,
  setUserCart,
} = CartSlice.actions;

export default CartSlice.reducer;
