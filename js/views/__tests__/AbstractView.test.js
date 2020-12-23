/* eslint-env jest */
import '../AbstractView.js';
import AbstractView from '../AbstractView.js';

describe('AbstractView module testing', () => {
    let view = new AbstractView();
    it( 'test ability to change title', async ()=> {
        view.setTitle('test');
        expect(document.title).toEqual('test');
    });
    it( 'test ability to change html', async ()=> {
        await view.getHtml().then(data => {
            expect(data).toEqual('');
        });
    });
    it( 'test ability to add Additional Scripts', async ()=> {
        await view.additionalHtml().then(data => {
            expect(data).toEqual(undefined);
        });
    });
});

