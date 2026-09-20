const cartLocators = require('../../locators/cartLocators/cartLocator')

class CartPOM{
constructor(page){
    this.page=page
}

async clickContinueShopping(){
        await this.page.locator(cartLocators.continueShopping).click()
}
async clickCheckOut(){
    await this.page.locator(cartLocators.checkOut).click()
}
 async getProductName(productName){
    const product = await this.page.locator(cartLocators.product_inventory).filter({hasText:productName})
    await product.first().waitFor({state:'visible',timeout:2000})

    return await this.page.locator(cartLocators.product_bikeLight).textContent()
 }
}
module.exports=CartPOM