import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utilities/reducer/reducer.utils";

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

const addItemToCart = (itemToAdd) => {
    const newCartItems = addCartItem(cartItems, itemToAdd);
    updateCartItemsReducer(newCartItems);
};

const removeItemFromCart = (itemToRemove) => {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    updateCartItemsReducer(newCartItems);
};

const clearItemFromCart =(itemToClear) => {
    const newCartItems = clearCartItem(cartItems, itemToClear);
    updateCartItemsReducer(newCartItems);
};

const addCartItem = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(item => item.id === itemToAdd.id);

    if (existingItem) {
        return cartItems.map(item => {
            return item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item;
        });
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }]
};

const removeCartItem = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find(item => item.id === itemToRemove.id);

    if (existingItem.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToRemove.id);
    }

    return cartItems.map(item => {
        return item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item;
    });
};

const clearCartItem = (cartItems, itemToClear) => {
    return cartItems.filter(item => item.id !== itemToClear.id);
};