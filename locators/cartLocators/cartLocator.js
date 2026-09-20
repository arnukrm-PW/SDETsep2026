const { product_bikeLight } = require("../productLocators/productLocators")

const cartLocators={

    continueShopping:'button[data-test="continue-shopping"]',
    checkOut:'button[data-test="checkout"]',
    carttitle:'span[data-test="title"]',
    product_bikeLight:'div[data-test="inventory-item-name"]',
    product_inventory:'[data-test="inventory-item"]'

}
module.exports=cartLocators