import '../sendOrder.js';
import { sendOrder } from '../sendOrder.js';

describe('Send order test', () => {
    it( 'it should return response with id of 17', () => {
        let body = { 
            name : 'name',
            phone : 'phone', 
            mail : 'mail',
            date : 'date',
            time : 'time',
            payment : 'payment',
            total : 'totalCost',
            cart : 'cart'
        }
        return sendOrder(body).then(data => {
            expect(data.id).toBe(17);
        });
    });
});

