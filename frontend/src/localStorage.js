export const getCartItems = () => {
    const cartitems = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')): 
    [];
    return cartitems;
}

export const setCartItems = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};