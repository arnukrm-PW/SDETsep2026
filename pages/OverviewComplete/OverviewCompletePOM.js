const overviewComplete = require('../../locators/overviewComplete/overviewComplete')

class OverviewCompletePOM{
constructor(page){
    this.page=page
}
async clickBackHome(){
    await this.page.locator(overviewComplete.checkoutComplete_BackToHome).click()
}

}
module.exports=OverviewCompletePOM