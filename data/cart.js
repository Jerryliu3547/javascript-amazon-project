export let cart = [];

// the following function update cart variable
export function addtoCart(productId) {
    let found = false;

    cart.forEach((cartItem)=>{
         if(productId === cartItem.productId) {
            cartItem.quantity ++;
             found = true;
         } 
    });
    if (!found) {
         cart.push({
             productId:productId,
             quantity:1
    });
    }
};