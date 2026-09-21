const {test : base, expect } = require('@playwright/test')

const test = base.extend({
loginPage: async ({page},use)=>{
    await page.goto("https://www.saucedemo.com/")
    await page.fill('input[data-test="username"]',"standard_user")
    await page.fill('input[data-test="password"]',"secret_sauce")
    await page.click('input[data-test="login-button"]')
    await use(page)
}
})
module.exports={test,expect}