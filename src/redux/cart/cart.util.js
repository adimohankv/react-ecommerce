export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === itemToAdd.id
    });

    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            return cartItem.id === itemToAdd.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
        });
    }

    return [...cartItems, {...itemToAdd, quantity: 1}];
};

export const reduceQuantity = (cartItems, itemToReduce) => {
    if (itemToReduce.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToReduce.id);
    };

    return cartItems.map(cartItem => {
        if (cartItem.id === itemToReduce.id) {
            return {...cartItem, quantity: cartItem.quantity - 1}
        }
        return cartItem;
    })
};