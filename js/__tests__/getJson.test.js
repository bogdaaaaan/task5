/* eslint-env jest */
import '../getJson.js';
import { getContent } from '../getJson.js';

describe('get Json test', () => {
    it( 'it should return array with content', async ()=> {
        const link2 = 'https://my-json-server.typicode.com/bogdaaaaan/db-pizza2';
        let content = await getContent(`${link2}/slider`);
        await expect(content).not.toBe('');
    });
});

