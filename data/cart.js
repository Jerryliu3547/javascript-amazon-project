export let cart = [{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2
},{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:2

}];

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

export function removefromCart(productId) {
    const newCart =[];

    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;
};