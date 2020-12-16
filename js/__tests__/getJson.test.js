/* eslint-env jest */
import "../getJson.js";
import { getContent } from "../getJson.js";

describe('get Json test', () => {
    it( 'it should return array with content', ()=> {
        const link2 = 'https://my-json-server.typicode.com/bogdaaaaan/db-pizza2';
        return getContent(`${link2}/slider`).then(data => {
            expect(data).not.toBe('');
        })
    });
});

