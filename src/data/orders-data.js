const productsData = require('./products-data');

const productIDs = Object
.values(productsData)
.map( product => ({
    id: product.id
}) )

module.exports = ordersData = {
    order1: {
        id: "order_01",
        countryFrom: "America",
        countryTo: "Armenia",
        productID: productIDs[0].id
    },
    order2: {
        id: "order_01",
        countryFrom: "America",
        countryTo: "Armenia",
        productID: productIDs[1].id
    }
}