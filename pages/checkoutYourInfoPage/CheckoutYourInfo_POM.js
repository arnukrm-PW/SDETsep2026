//Checkout: Your Information
const checkoutYourInfoLocator = require('../../locators/checkoutYourInfoLocator/checkoutYourInfoLocator')

class CheckoutYourInfo_POM{
    constructor(page){
        this.page=page
    }
async getCheckoutYourInfo_Title(){
    return await this.page.locator(checkoutYourInfoLocator.checkoutTitle).textContent()
}

async clickCheckoutYourInfo_Cancel(){
    await this.page.locator(checkoutYourInfoLocator.checoutCancel).click()
}
async clickCheckoutYourInfo_Continue(){
await this.page.locator(checkoutYourInfoLocator.checkoutContinue).click()
}
async fill_firstName(FName){
    await this.page.locator(checkoutYourInfoLocator.checkoutFirstName).fill(FName)
}

async fill_LastName(LName){
    await this.page.locator(checkoutYourInfoLocator.checkoutLastName).fill(LName)
}

async fill_ZIPCode(ZCode){
    await this.page.locator(checkoutYourInfoLocator.checkoutZipCode).fill(ZCode)
}
}
module.exports=CheckoutYourInfo_POM