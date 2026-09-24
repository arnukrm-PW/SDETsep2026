
const {test:setup,expect} = require('@playwright/test')


const authFile = "utils/.auth/user.json"
setup("TC_00 storageStage for Login",async({page})=>{

   await  page.goto("https://www.saucedemo.com/")
   await  page.locator('input[data-test="username"]').fill("standard_user")
   await  page.locator('input[data-test="password"]').fill("secret_sauce")
   await  page.locator('input[data-test="login-button"]').click()
   //verify login successfull
   const titlename = await page.getByText('Products')
   await expect(titlename).toBeVisible()
   //await page.getByText('Products').waitFor({state:'visible',timeout:2000})
   await page.context().storageState({
    path:authFile
   })
})