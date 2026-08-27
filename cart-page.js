export let  cart = JSON.parse(localStorage.getItem("Ecom-Storage"));

if (!cart) {
    //if the cart is Empty the computer show this product as default.
    cart = [{

            // Saving the mockup data
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 1,
            }, 
            {
                productId: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
                quantity: 1,
            },
            {
                productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
                quantity: 1,
            }, 
            {
                productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
                quantity: 1,
            }];

}



function vurnoStorage () {
    localStorage.setItem("Ecom-Storage", JSON.stringify(cart))
}

// localStorage.clear();



export function productTaker (dataproductId, selectedItem) {
let itemMatching;

cart.forEach((item) => {
    //checking if a product is already in a cart
    if (dataproductId === item.productId) {
    itemMatching = item;
    }   
});
    //if it is in the cart increase the quantity
    if (itemMatching) {
        itemMatching.quantity += selectedItem;

        //if it is not in the cart add to the cart
    } else {

        cart.push({
            productId: dataproductId,
            quantity: selectedItem,
        })
    }

    vurnoStorage ()
}


export function cartRemover(attachId) {

    const newArray = [];

    cart.forEach((cartItem) => {

         if  (cartItem.productId !== attachId) {
            newArray.push(cartItem )
         }
    })
      cart = newArray;
    // cart = cart.filter((cartItem) => {
    // return cartItem.productId !== attachId;
    // });

    vurnoStorage () 
}

