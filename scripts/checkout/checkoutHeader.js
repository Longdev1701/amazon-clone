import { cart,calculateCartQuantity } from "../../data/cart.js";


export function renderCheckoutHeader(){
    let cartQuantity = calculateCartQuantity(cart);

    document.querySelector('.js-checkout-header')
        .innerHTML = `
            Checkout (<a class="return-to-home-link js-return-to-home-link"
            href="amazon.html">${cartQuantity}</a>)
        `;
}