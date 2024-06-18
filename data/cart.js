export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart){
    cart = [];
};



function savetoStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
};

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
    savetoStorage();
};

export function removefromCart(productId) {
    const newCart =[];

    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    savetoStorage();
};