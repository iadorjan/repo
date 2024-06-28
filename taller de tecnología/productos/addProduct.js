const products = [];

function addProduct(name, description, price, stock) {
    const product = { name, description, price, stock };
    products.push(product);
    return product;
}

module.exports = products;
module.exports.addProduct = addProduct;