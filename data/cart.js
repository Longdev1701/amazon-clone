export const cart = [];

export function addToCart(productId){
    let matchingItem;

    cart.forEach((cartItem) =>{
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    const quantitySelector = Number(document.querySelector(
        `.js-quantity-selector-${productId}`
    ).value);

    if(matchingItem){
        matchingItem.quantity += quantitySelector;
    } else{
        cart.push({
            productId: productId,
            quantity: quantitySelector
        });
    }
}