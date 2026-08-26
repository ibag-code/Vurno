
// setTimeout (()=> {
// alert("MY brr you just have to get ur shit 2geda")
// }, 2000)

import {cart} from './cart-page.js';
import {productInfo} from './product-info.js' 


let checkOutHtml = ""

// Generating the HTML with js
cart.forEach((cartsItem) => {
    
    //Getting full product info with ID
    let productId = cartsItem.productId;

    let productCorrelation = '';

    productInfo.forEach((productInformation)=>{

        if (productId === productInformation.id) {
            productCorrelation = productInformation;
        }
    })

    // console.log (productCorrelation)


    let html = `<div class="product-image-cotent">

                <div class="product-image">
                    <img src="${productCorrelation.image}" alt="" class="product-image">
                </div>

                <div class="all-content">

                    <div class="delivery-price-quantity">
                        <p class="tender-date">Delivery date: Monday, May 8</p>

                        <h5>${productCorrelation.productName}</h5>

                        <h1>$${productCorrelation.pricing/100 }</h1>

                        <p>Quantity <span>${cartsItem.quantity}</span></p>
                    </div>


                    <div class="cancel-delivery-option">


                        <div class="cancel-icon">
                            <i class="hgi hgi-stroke hgi-rounded hgi-cancel-01"></i>
                        </div>



                        <div class="delivery-option-and-header">

                            <p>Choose Delivery Option:</p>

                            <div class="delivery-options">

                                <!-- Option 1 -->
                                <label class="delivery-option">
                                    <input type="radio" name="delivery" checked />

                                    <div class="delivery-info">
                                    <h5>Monday, May 8</h5>
                                    <p>Free Shipping</p>
                                    </div>
                                </label>


                                <!-- Option 2 -->
                                <label class="delivery-option">
                                    <input type="radio" name="delivery" />

                                    <div class="delivery-info">
                                    <h5>Tuesday, May 2</h5>
                                    <p>$4.99 - Shipping</p>
                                    </div>
                                </label>


                                <!-- Option 3 -->
                                <label class="delivery-option">
                                    <input type="radio" name="delivery" />

                                    <div class="delivery-info">
                                    <h5>Friday, April 28</h5>
                                    <p>$9.99 - Shipping</p>
                                    </div>
                                </label>

                            </div>

                        </div>

                    </div>


                </div>

            </div>`

            checkOutHtml = checkOutHtml + html;
})

console.log (checkOutHtml)

document.querySelector('.all-product').innerHTML = checkOutHtml;



// CONTROLLER


//Cancel btn 

const deleteButton = document.querySelector('.cancel-icon');

deleteButton. addEventListener("click", () => {
    
})
