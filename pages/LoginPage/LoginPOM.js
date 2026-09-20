
const loginLocators = require('../../locators/loginLocators/loginLocator')

class LoginPOM {
    constructor(page){
        this.page=page
    }

    async setUsername(username){
        await this.page.locator(loginLocators.usernameInput).fill(username)
    }

    async setPassword(password){
        await this.page.locator(loginLocators.passwordInput).fill(password)
    }

    async clickLogin(){
        await this.page.locator(loginLocators.buttonLogin).click()
    }
}
module.exports=LoginPOM