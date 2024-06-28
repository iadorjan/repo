const products = require('./addProduct').addProduct;

function sellProduct(name, quantity) {
    const product = products.find(product => product.name === name);

    if (!product) {
        return "Product not found";
    }

    if (product.stock < quantity) {
        return "Insufficient stock";
    }

    product.stock -= quantity;
    return `Purchased ${quantity} of ${name}`;
}

module.exports = sellProduct;