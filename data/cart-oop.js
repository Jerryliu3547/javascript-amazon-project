// object oriented programming
// easy to create multiple object
function Cart (localStorageKey) {
    const cart = {
        cartItems: undefined,
    
        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
        
            if (!this.cartItems){
                this.cartItems = [{
                    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity:2,
                    deliveryOption:'1'
                }, {
                    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity:4,
                    deliveryOption:'2'
                }];
            };
        },
        savetoStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },
    
        addtoCart(productId) {
            let found = false;
        
            this.cartItems.forEach((cartItem)=>{
                 if(productId === cartItem.productId) {
                    cartItem.quantity ++;
                     found = true;
                 } 
            });
            if (!found) {
                 this.cartItems.push({
                     productId:productId,
                     quantity:1,
                     deliveryOption:'1'
            });
            }
            this.savetoStorage();
        },
    
        removefromCart(productId) {
            const newCart =[];
        
            this.cartItems.forEach((cartItem)=>{
                if(cartItem.productId !== productId){
                    newCart.push(cartItem);
                }
            });
        
            this.cartItemscart = newCart;
            this.savetoStorage();
        },
    
        updateDeliveryOption(productId, deliveryOptionId) {
            let matchingItem;
            this.cartItems.forEach((cartItem)=>{
                if (productId === cartItem.productId) {
                    matchingItem = cartItem;
                }
            })
        
            matchingItem.deliveryOption = deliveryOptionId;
        
            this.savetoStorage();
        }
    
    };
    return cart;
}

const cart = Cart('cart-oop');

// creating a seperate object for differnect account such as busssiness account
const businessCart = Cart('cart-business');

cart.loadFromStorage();

// creating a seperate object for differnect account such as busssiness account



