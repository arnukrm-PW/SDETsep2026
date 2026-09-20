const overviewLocator = require('../../locators/overview/overviewLocator')

class OverviewPagePOM{

    constructor(page){
        this.page=page
    }

    async clickCancel(){
        await this.page.locator(overviewLocator.overview_cancel).click()
    }
    async clickFinish(){
        await this.page.locator(overviewLocator.overview_finish).click()
    }
    async getPaymentInfo(){
       return await this.page.locator(overviewLocator.overview_paymentInformation).textContent()
    }
    async getShippingInfo(){
        return await this.page.locator(overviewLocator.overview_shippingInfo).textContent()
    }
    async getPriceTotalInfo(){
        return await this.page.locator(overviewLocator.overview_PriceTotal).textContent()
    }
}
module.exports=OverviewPagePOM