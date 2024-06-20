import {renderOderSummary} from '../../scripts/checkout/orderSummary.js'

describe('test suite: renderOrderSummary', ()=>{
    it('display the cart', ()=>{
        document.querySelector('.js-test-container').innerHTML =   `
            <div class="js-order-summary"></div>
        `
    });
})