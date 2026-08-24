const productInfo = [{
    image:  "images/product/athletic-cotton-socks-6-pairs.jpg",
    productName: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
        stars: '4.5',
        ratingNumber: 87
    },
    pricing: "699",
},
{
    image:  "images/product/Basketball.jpg ",
    productName: "Intermediate Size Basketball",
    rating: {
        stars: '5.0',
        ratingNumber: 40
    },
    pricing: "1299",
},
{
    image:  "images/product/shirt.jpg",
    productName: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
        stars: '4.0',
        ratingNumber: 87
    },
    pricing: "6599",
},
{
    image:  "images/product/black-2-slot-toaster.jpg",
    productName: "2 Slot Toaster - Black",
    rating: {
        stars:'4.5',
        ratingNumber: 70
    },
    pricing: "2399",
},
{
    image:  "images/product/6-piece-white-dinner-plate-set.jpg",
    productName: "6 Piece White Dinner Plate Set",
    rating: {
        stars: '4.5',
        ratingNumber: 87
    },
    pricing: "1099",
},
{
    image:  "images/product/6-piece-non-stick-baking-set.webp",
    productName: "6-Piece Nonstick, Carbon Steel Oven Bakeware ",
    rating: {
        stars: '4.5',
        ratingNumber: 87
    },
    pricing: "699",
},
{
    image:  "images/product/plain-hooded-fleece-sweatshirt-yellow.jpg",
    productName: "Plain Hooded Fleece Sweatshirt",
    rating: {
        stars: '5.0',
        ratingNumber: 56
    },
    pricing: "9899",
},
{
    image:  "images/product/luxury-tower-set-6-piece.jpg",
    productName: "Luxury Towel Set - Graphite Gray",
    rating: {
        stars: '5.0',
        ratingNumber: 120
    },
    pricing: "1099", 
},
]

//COMBINING ALL HTML 
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
                <button class="call-to-action js-cta" data-products-name ="${product.productName}"> 
                Add to cart</button>
        </div>`

        productHTMl += html;

       /*console.log(productHTMl)*/

});

// Linking the generrated HTML in js back to javasript 
document.querySelector('.js-product-grid').innerHTML = productHTMl;



//This give us the list of NodeList all the Add to cart buttom
//On the page
let ctaBtn = document.querySelectorAll('.js-cta');


//Looping through each of the button
//querySelectorAll returns a NodeList — which is not a single 
// element, it's a collection of elements. 
// Think of it like an array of all the buttons on the page


///"Loop through every ctaBtn I selected, 
// and for each one, call it button temporarily"
ctaBtn.forEach((button) => {

    //"When this specific button is clicked, run the following code"    
    button.addEventListener('click', function() {

        //dataset gives us all the data attached to the CTA button
        const dataproductName = button.dataset.productsName;

 
        const productCard = button.closest('.product-image-content');
        const dropdown = productCard.querySelector('.product-quantity');
        const selectedItem = Number(dropdown.value);
        const addText = productCard.querySelector('.added-to-cart');

        console.log(dropdown)




        /*
        const productCard = button.closest('.product-image-content');
        const dropdown = document.querySelector(`.js-quantity-selector-${dataproductName.replace(/\s/g, '')}`);
        let selectedItem = Number(dropdown.value);
        const addText = productCard.querySelector('.added-to-cart');
        */


        addText.classList.add('visible');

        setTimeout(function() {
            addText.classList.remove('visible')
        }, 1000)




        let itemMatching;

        cart.forEach(function(item) {
            //checking if a product is already in a cart
            if(dataproductName === item.productName){
                itemMatching = item;
            }   
        });
            //if it is in the cart increase the quantity
            if (itemMatching) {
                itemMatching.quantity += selectedItem;

                //if it is not in the cart add to the cart
            } else {
                //After getting the name of the produuct when clicking ADD to cart
                //them push the name and other data to the cart page.
                cart.push({
                    productName: dataproductName,
                    quantity: selectedItem,
                })
            }
            console.log (cart)


            //calculating the total Quantity
            let quantityCart = 0;//Adding up al the quantity nd save it here

            cart.forEach(function(item) {
                quantityCart += item.quantity;
            })

            document.querySelector('.js-cart-number').innerHTML = quantityCart;

            console.log (quantityCart);

            

            
    })
})



const inputFieldBtn = document.querySelector('.input-field');
const iconBtn = document.querySelector('.search-bar-icon');

iconBtn.addEventListener('click', function () {
    inputFieldBtn.classList.toggle('open')

    if (inputFieldBtn.classList.contains('open')) {
        inputFieldBtn.focus();
    }
        
})








