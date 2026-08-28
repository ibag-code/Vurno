import {cart, productTaker,vurnoStorage} from './cart-page.js';
import {productInfo} from './product-info.js'
import{formatCurrency} from './ utility.js'


//COMBINING ALL HTML  Or Viewer
let productHTMl = '';

productInfo.forEach((product) => {

    let html = `  
        <div class="product-image-content">

            <div class="product-image-div">
                <img src="${product.image}" alt="productimage" class="product-image-div">
            </div>

            <div class="product-content">
                <p class="product-name">${product.productName} </p>


                <div class="rating-added-cart">
                    
                    <div class="rating-and-count">
                        <img src="images/ratings/Rating ${product.rating.stars}.svg" alt="rating${product.rating.stars}" class="rating-star">
                        <p class="rating-count"> ${product.rating.ratingNumber}</p>
                    </div>



                    <div class="added-to-cart"> Added </div>
                    
                </div>


                    <div class="price-picker">

                        <p class="pricing">$${(product.pricing / 100).toFixed(2)}</p>
                        
                        <div class="dp-down-and-added">

                        <select class="product-quantity js-quantity-selector-${product.productName.replace(/\s/g, '')}">
                        <img src="images/icons/dropsoun-Vector.svg" alt="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        </select>
                    </div>

                </div>

            </div>
                <button class="call-to-action js-cta" data-products-id ="${product.id}"> 
                Add to cart</button>
        </div>`

        productHTMl += html;

       /*console.log(productHTMl)*/

});

// Linking the generrated HTML in js back to javasript 
document.querySelector('.js-product-grid').innerHTML = productHTMl;

vurnoStorage ()






// The call to action button Or Controller
let ctaBtn = document.querySelectorAll('.js-cta');


ctaBtn.forEach((button) => {

    //"When this specific button is clicked, run the following code"    
    button.addEventListener('click', function() {

        //dataset gives us all the data attached to the CTA button
        const dataproductId = button.dataset.productsId;
 
        
        const productCard = button.closest('.product-image-content');
        const dropdown = productCard.querySelector('.product-quantity');
        const selectedItem = Number(dropdown.value);
        const addText = productCard.querySelector('.added-to-cart');

        // console.log(dropdown)


        addText.classList.add('visible');

        setTimeout(function() {
            addText.classList.remove('visible')
        }, 1000)
 


        //take product and add it to the cart
        productTaker(dataproductId, selectedItem)


            //calculating the total Quantity
            let quantityCart = 0;

            cart.forEach((item) => {
                quantityCart += item.quantity;
            })

            document.querySelector('.js-cart-number').innerHTML = quantityCart;
    })

});




