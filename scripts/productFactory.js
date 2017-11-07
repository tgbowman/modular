let productsDatabase = []
let idGenerator = function*(){
    let id = 1
    while(true){
        yield id
        id++
    }
}

const productID = idGenerator()

let newProductFactory = function (name, desc, price, qty, img) {
    productsDatabase.push(Object.create(null, {
        "id": {
            value: productID.next().value,
            enumerable: true
        },
        "title": {
            value: name,
            enumerable: true
        },
        "description": {
            value: desc,
            enumerable: true
        },
        "price": {
            value: price,
            enumerable: true
        },
        "quantity": {
            value: qty,
            enumerable: true
        },
        "imageURL": {
            value: img,
            enumerable: true
        }
    }))
}

newProductFactory("Fog Point Vodka", "Extraordinarily crisp vodka made from Northern California fog.", 41, 100, "img/fogPoint.jpg")

newProductFactory("Clip On Instant Man Bun", "This clip on hair piece gives you the appearance of the on-trend hairstyle without any commitment.", 25, 100, "img/manbun.jpg")



module.exports = productsDatabase