/* eslint-env jest */
import {implementSlider} from '../additional.js';
import Home from '../views/Home.js';

const view = new Home();

describe('additional module testing', () => {
    beforeAll( async ()=> {
        document.body.innerHTML = '<div id="root"></div>';
    });
    it( 'it should add slider to the page', async () => {
        document.querySelector('#root').innerHTML = `
            <div class="container">
                <div class="main-slider">
                    <div class="main-slider__content">
                        <div class="slider-image">
                            <button class="slide-changer" id="slide-left"></button>
                            <button class="slide-changer" id="slide-right"></button>
                        </div>
                    </div>
                    <div class="main-slider__buttons">
                        <ul class="buttons-list">
                        
                        </ul>
                    </div>
                </div>
                
                <div class="product-list__container">
            
                </div>
            </div> 
            `;
      
        await implementSlider();
        console.log(document.querySelector('#root').innerHTML);
    });
});

