
const {test,expect}=require('@playwright/test')
const {BASE_URL,USERNAME,PASSWORD} = require('../../utils/envConfig')
//POM

const CartPOM = require('../../pages/cartPage/CartPOM')
const CheckoutYourInfo_POM = require('../../pages/checkoutYourInfoPage/CheckoutYourInfo_POM')
const LoginPOM = require('../../pages/LoginPage/LoginPOM')
const OverviewCompletePOM = require('../../pages/OverviewComplete/OverviewCompletePOM')
const OverviewPagePOM = require('../../pages/overviewPage/OverviewPagePOM')
const ProductPOM = require('../../pages/ProductPage/ProductPOM')



//locators
const cartLocators = require('../../locators/cartLocators/cartLocator')
const checkoutYourInfoLocator = require('../../locators/checkoutYourInfoLocator/checkoutYourInfoLocator')
const loginLocators = require('../../locators/loginLocators/loginLocator')
const overviewLocator = require('../../locators/overview/overviewLocator')
const overviewComplete = require('../../locators/overviewComplete/overviewComplete')
const productLocators = require('../../locators/productLocators/productLocators')

//Test Data
const productsToAdd = require('../../test-data/products')



test.describe("Sause Demo E2E Test",()=>{

// object variables
let cartPOM
let checkoutYourInfo_POM
let loginPOM
let overviewCompletePOM
let overviewPagePOM
let productPOM


test.beforeEach(async({page})=>{
//objects
cartPOM=new CartPOM(page)
checkoutYourInfo_POM = new CheckoutYourInfo_POM(page)
loginPOM=new LoginPOM(page)
overviewCompletePOM=new OverviewCompletePOM(page)
overviewPagePOM = new OverviewPagePOM(page)
productPOM=new ProductPOM(page)


//variable setup
// const baseURL= process.env.BASE_URL
// const username =  process.env.USERNAME
// const password =  process.env.PASSWORD
// if(!baseURL) throw new Error("base URL is incorrect")
//     if(!username || !password) throw new Error("credentials are incorrect")
await page.goto(BASE_URL)
await loginPOM.setUsername(USERNAME)
await loginPOM.setPassword(PASSWORD)
await loginPOM.clickLogin()

    })
test("login to SD",async ({page})=>{
   await  expect(page).toHaveURL(/inventory/)
   await expect(page.locator(productLocators.openMenu)).toBeVisible()
   await page.waitForTimeout(2000)
   //await page.pause() updated the login
})
    
test("About page",async ({page})=>{
    //await page.pause()
    //await expect(page.locator(productLocators.openMenu)).toBeVisible()

    await productPOM.clickAbout()

    await expect(page).toHaveURL('https://saucelabs.com/')
    await expect(page.getByRole('link',{name:"Book a Demo"}).first()).toBeVisible()
    await expect(page.locator(productLocators.menuAbout_bookADemoNew).first()).toBeVisible()
    await expect(page.locator(productLocators.menuAbout_Login)).toBeVisible()
    await page.goBack()
    await expect(page.locator(productLocators.openMenu)).toBeVisible()
    await expect(page.locator(productLocators.productTitle)).toContainText("Products")
    await page.waitForTimeout(2000)
    //await page.pause()
})
test("validate product inventorys",async({page})=>{
    //await page.pause()
    await productPOM.validateAllProductDisplayed()
await productPOM.addFirstProduct()
    await productPOM.addAllProducts()
      await page.waitForTimeout(2000)
//await page.pause()
 
})

test("Logout page",async ({page})=>{
    await expect(page.locator(productLocators.openMenu)).toBeVisible()
    await productPOM.clickLogout()
    expect(page).toHaveURL('https://www.saucedemo.com/')
    await page.waitForTimeout(2000)
    //await page.pause()
})
test('click on Add to Cart for product bike-light',async({page})=>{
   // await expect(page.locator(productLocators.product_bikeLight).filter({hasText:'Sauce Labs Bike Light'})).toBeVisible()
    await productPOM.clickOnProduct('Sauce Labs Bike Light')
    await productPOM.clickCart()
    expect(page.locator(cartLocators.product_inventory).filter({hasText:'Sauce Labs Bike Light'})).toBeVisible()
    await page.waitForTimeout(2000)
})

test('click on CartMenu page',async ({page})=>{
// await page.pause()
    await expect(page.locator(productLocators.cartMenu)).toBeVisible()
    await productPOM.clickCart()
    await expect(page).toHaveURL(/cart/)
    await expect(page.locator(cartLocators.carttitle)).toContainText('Your Cart')
    // await page.pause()
    await page.waitForTimeout(2000)
})
test("click on Continue Shopping",async ({page})=>{
    // await page.pause()
    await expect(page.locator(productLocators.cartMenu)).toBeVisible()
    await productPOM.clickCart()
    await expect(page.locator(cartLocators.continueShopping)).toBeVisible()
    await cartPOM.clickContinueShopping()
    await expect(page.locator(productLocators.productTitle)).toContainText('Products')
    await page.waitForTimeout(2000)
})
test("verify continue shopping button on cart page",async ({page})=>{

//await page.pause()
    await productPOM.clickOnProduct('Sauce Labs Backpack')
    await productPOM.clickCart()
    await expect(page.locator(cartLocators.carttitle)).toBeVisible()
    const product = await cartPOM.getProductName("Sauce Labs Backpack")
    expect(product).toContain("Sauce Labs Backpack")
   // expect(product).toContainText("Sauce Labs Backpack")
    await cartPOM.clickContinueShopping()
    const product1 = await page.locator(productLocators.inventoryItem).filter({hasText:"Sauce Labs Backpack"})
    await expect(product1.locator('button')).toContainText("Remove") //validate button status remained unchanged when click continue shopping cart
    await expect(page).toHaveURL(/inventory/)
    await page.waitForTimeout(2000)
})
test('verify to add specific products to cart',async ({page})=>{
    // await page.pause()
    await expect ( page.locator(productLocators.product_Name).first()).toBeVisible()
    await productPOM.addSpecificProductToCart(productsToAdd)
   
})

})