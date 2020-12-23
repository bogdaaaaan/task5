/* eslint-env jest */
import { getCart, addToCart } from '../additional.js';

describe('Cart test', () => {
    it( 'it should add empty cart', ()=> {
        let cart = getCart();
        expect(cart).toEqual([]);
    });

    it( 'it should add to cart some products', ()=> {
        let cart = getCart();
        addToCart(1);
        expect(cart).toEqual([{'id': 1, 'quantity': 1,}]);
        addToCart(2);
        expect(cart).toEqual([{'id': 1, 'quantity': 1,},{'id': 2, 'quantity': 1,}]);
    });
});

