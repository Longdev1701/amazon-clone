import { addToCart,cart,loadCartFromStorage } from "../../data/cart.js";

describe('Test Suite: addToCard',() => {
    it('adds an existing product to the cart',() => {

    }); 

    it('adds a new product to the cart',() => {
        spyOn(localStorage,'setItem');

        spyOn(localStorage,'getItem').and.callFake(() => {
            return JSON.stringify([]);
        }); 

        loadCartFromStorage();


        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).Equal(1);
        expect (localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).Equal('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });
});