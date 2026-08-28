import {cart, cartRemover} from './cart-page.js';
import {productInfo} from './product-info.js' 
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import {deliveryOption} from './delivery-option.js'
import{formatCurrency} from './ utility.js'


const today = dayjs()
const deliveryDay = today.add(7, 'days')

// console.log (deliveryDay)

const formatDate = deliveryDay.format('dddd, MMMM D')








// Generating Checkoutpage Html

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

                        ${deliveryOptionHtml(productCorrelation, cartsItem)}

                    </div>

                </div>


            </div>

        </div>`

            checkOutHtml = checkOutHtml + html;
})
document.querySelector('.all-product').innerHTML = checkOutHtml;






//Delivery Option FrameWork Generation

function deliveryOptionHtml(productCorrelation, cartsItem) {

    let deliverOptionHtml = "";

    deliveryOption.forEach((deliver) => {

        const today = dayjs();

        const deliveryDay = today.add(
            deliver.deliveryday,
            "days"
        );

        const dateFormat =
            deliveryDay.format("dddd, MMMM D");


        let priceString;

        if (deliver.price === 0) {
            priceString = "Free";
        } else {
            priceString = `$${formatCurrency(deliver.price)}`;
        }



        //checked
        let checked = '';

        if (deliver.id === cartsItem.deliveryOption) {
            checked = 'checked'
        } else{
            checked = ''
        }


        const html = `
            <label class="delivery-option">

                <input 
                    ${checked}  type="radio"
                    name="delivery-${productCorrelation.id}"
                />

                <div class="delivery-info">
                    <h5>${dateFormat}</h5>
                    <p>${priceString} - Shipping</p>
                </div>

            </label>
        `;


        deliverOptionHtml = deliverOptionHtml + html;
    });


    return deliverOptionHtml;
}









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
