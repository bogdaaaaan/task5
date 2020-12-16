/* eslint-env jest */
import "../additional.js";
import { implementSlider } from "../additional.js";

describe('additional module testing', () => {
    it( 'it should add slider to the page', async () => {
        document.body.innerHTML = `<div class="slider-image"></div> <div class="buttons-list"></div>`
        const data = await implementSlider();
        expect(data);
    });
});

