
// setTimeout (()=> {
// alert("MY brr you just have to get ur shit 2geda")
// }, 2000)

import {cart, cartRemover} from './cart-page.js';
import {productInfo} from './product-info.js' 
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";


const today = dayjs()
const deliveryDay = today.add(7, 'days')

deliveryDay.format('dddd, MMMM D')

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


    let html = `<div class=" product-image-cotent
    js-product-image-cotent-${productCorrelation.id}">

                <div class="product-image">
                    <img src="${productCorrelation.image}" alt="" class="product-image">
                </div>

                <div class="all-content">

                    <div class="delivery-price-quantity">
                        <p class="tender-date">Delivery date: Monday, May 8</p>

                        <h5>${productCorrelation.productName}</h5>

                        <h1>$${(productCorrelation.pricing/100).toFixed(2)}</h1>

                        <p>Quantity <span>${cartsItem.quantity}</span></p>
                    </div>


                    <div class="cancel-delivery-option">


                        <div class="cancel-icon" data-delete-item = ${productCorrelation.id}>
                            <i class="hgi hgi-stroke hgi-rounded hgi-cancel-01"></i>
                        </div>



                        <div class="delivery-option-and-header">

                            <p>Choose Delivery Option:</p>

                            <div class="delivery-options">

                                <!-- Option 1 -->
                                <label class="delivery-option">
                                    <input type="radio" name="delivery-${productCorrelation.id}" checked />

                                    <div class="delivery-info">
                                    <h5>Monday, May 8</h5>
                                    <p>Free Shipping</p>
                                    </div>
                                </label>


                                <!-- Option 2 -->
                                <label class="delivery-option">
                                    <input type="radio" name="delivery-${productCorrelation.id}" />

                                    <div class="delivery-info">
                                    <h5>Tuesday, May 2</h5>
                                    <p>$4.99 - Shipping</p>
                                    </div>
                                </label>


                                <!-- Option 3 -->
                                <label class="delivery-option">
                                    <input type="radio" name="delivery-${productCorrelation.id}" />

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

// console.log (checkOutHtml)

document.querySelector('.all-product').innerHTML = checkOutHtml;



// CONTROLLER


//Cancel btn 

const deleteButton = document.querySelectorAll('.cancel-icon');

deleteButton.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', () => {
        
        //  alert("I will detete it now")

        const attachId = deleteBtn.dataset.deleteItem

        cartRemover(attachId)
        // alert(cart)
        // alert(attachId)

        const theContainer = document.querySelector(`.js-product-image-cotent-${attachId}`)

        // console.log (theContainer)

        theContainer.remove()
        checkedCount()
    })
})


    function checkedCount() {
        let checkCounting = 0;

        cart.forEach((checkout) => {
            checkCounting += checkout.quantity;
        });

        document.querySelector(".checkout").innerHTML = checkCounting;

        }

        checkedCount();
