let products = require("./productFactory")
let reviews = require("./reviewFactory")
let productsOutputEl = document.getElementById("productList")

function populateProducts(productArray, reviewArray){
    let productHTML = ""
    productArray.forEach(
        product => {
            let productReview = reviewArray.filter( r => r.productId === product.id)
                
            
            productHTML += 
            `
            <section class= "product" id="product__${product.id}">
                <img src="${product.imageURL}" alt="${product.title}" width="150px">
                <h1>${product.title}</h1>
                <h2>Description</h2>
                <h3 class= "product__description">${product.description}</h3>
                <h2>Price</h2>
                <h3 class="product__price">$${product.price}.00</h3>
                <h2>In-Stock</h2>
                <h3>${product.quantity}</h3>
                <h2>Reviews</h2>
            
            `
            productReview.forEach(
                review => {
                    productHTML += 
                    `
                    <div class = "review">
                        <h2>Reviewed by: ${review.user}</h2>
                        <h3>${review.review}</h3>
                        <h2>${review.starNum} out of 5 stars</h2>
                    </div>
                    `
                }
            )
            productHTML += "</section>"
        }
    )
    productsOutputEl.innerHTML = productHTML
}

let productList = function(){
    populateProducts(products, reviews)
}

module.exports = productList