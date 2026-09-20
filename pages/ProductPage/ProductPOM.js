const productLocators = require('../../locators/productLocators/productLocators')

const productsToAdd = require('../../test-data/products')

class ProductPOM {
    constructor(page) {
        this.page = page
    }
    async clickAbout() {
        const openMenu = await this.page.locator(productLocators.openMenu)
           await  openMenu.waitFor({state:'visible',timeout:2000})
        await this.page.locator(productLocators.openMenu).click()
        await this.page.locator(productLocators.menuAbout).click()
    }
    async clickLogout() {
        await this.page.locator(productLocators.openMenu).click()
        await this.page.locator(productLocators.menuLogout).click()
    }
    async clickCart() {
        await this.page.locator(productLocators.cartMenu).click()
    }
    async clickOnProduct(productName) {
        const inventory = await this.page.locator(productLocators.inventoryItem).filter({ hasText: productName })
        //const product = await this.page.locator(productLocators.product_Name).filter({hasText:productName})
        await inventory.locator(productLocators.product_ATC).click()
        // await this.page.locator(productLocators.product_bikeLight).filter({hasText:productName}).click()
    }
    async validateAllProductDisplayed() {
        const product = await this.page.locator(productLocators.product_Name).allTextContents()
        const description = await this.page.locator(productLocators.product_Desc).allTextContents()
        const price = await this.page.locator(productLocators.product_Price).allTextContents()
        const ATC = await this.page.locator(productLocators.product_ATC).count()
        if (product.length === 0) throw new Error("No product available")
        if (product.length !== description.length || product.length !== price.length || product.length !== ATC) throw new Error("Product Details Missmatched")

    }

    async addFirstProduct() {
        await this.page.locator(productLocators.product_ATC).first().click()
    }
    async addAllProducts() {
        const ATCButtons = await this.page.locator(productLocators.product_ATC)
       
        while (await ATCButtons.count() > 0) {
            await ATCButtons.first().click()
        }
    }

    async addSpecificProductToCart(productsToAdd) {
        
        const product = await this.page.locator(productLocators.inventoryItem)
        
        //  const count = await pName.count()
         await  console.log(`total count ${await product.count()}`)
        for(let i=0;i<await product.count();i++){
           const productN = await product.nth(i)

            const name = (await productN.textContent()).trim()
            
if(productsToAdd.includes(name)){
    await console.log(`name : ${i} and ${name}`)
    await productN.locator(productLocators.product_ATC).click()
    await this.page.waitForTimeout(2000)
}           
}
    }
}
module.exports = ProductPOM