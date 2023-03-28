// import { createContext, useReducer } from "react";
// import { createAction } from "../utilities/reducer/reducer.utils";

// export const CartContext = createContext({
//     isCartOpen: false,
//     setIsCartOpen: () => {},
//     cartItems: [],
//     addItemToCart: () => {},
//     removeItemFromCart: () => {},
//     clearItemFromCart: () => {},
//     cartCount: 0,
//     cartTotal: 0
// });

// export const CartProvider = ({ children }) => {

//     const [ state, dispatch ] = useReducer(cartReducer, INITIAL_STATE)
//     const { cartItems, cartCount, cartTotal, isCartOpen } = state;

//     const updateCartItemsReducer = (newCartItems) => {
//         const newCartTotal = newCartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
//         const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

//         dispatch(
//             createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { 
//                 cartItems: newCartItems, 
//                 cartTotal: newCartTotal, 
//                 cartCount: newCartCount 
//             })
//         );
//     };

//     const value = {
//         isCartOpen,
//         setIsCartOpen,
//         addItemToCart,
//         removeItemFromCart,
//         clearItemFromCart,
//         cartItems,
//         cartCount,
//         cartTotal
//     };

//     return (
//         <CartContext.Provider value={value}>{ children }</CartContext.Provider>
//     );
// };