const{test,expect}=require('@playwright/test')


  
test("TC_01 Extract all product name",async({page})=>{

//    await  page.goto("https://www.saucedemo.com/")
//    await  page.locator('input[data-test="username"]').fill("standard_user")
//    await  page.locator('input[data-test="password"]').fill("secret_sauce")
//    await  page.locator('input[data-test="login-button"]').click()
//    await page.getByText('Products').waitFor({state:'visible',timeout:2000})

    await page.goto("https://www.saucedemo.com/inventory.html")
    await expect(page).toHaveURL(/inventory/)
   const products = await page.locator('[data-test="inventory-item-name"]')
   const names = await products.allTextContents()
    console.log(names)
} )
test("TC_02 Extract all prices",async({page})=>{

//    await  page.goto("https://www.saucedemo.com/")
//    await  page.locator('input[data-test="username"]').fill("standard_user")
//    await  page.locator('input[data-test="password"]').fill("secret_sauce")
//    await  page.locator('input[data-test="login-button"]').click()
//    await page.getByText('Products').waitFor({state:'visible',timeout:2000})

await page.goto("https://www.saucedemo.com/inventory.html")
    await expect(page).toHaveURL(/inventory/)
   const products = await page.locator('[data-test="inventory-item-name"]')
   const names = await products.allTextContents()
    console.log(names)

    const prices = await page.locator('[data-test="inventory-item-price"]')
    const allPrices = await prices.allTextContents()
    console.log(allPrices)
} )
test("TC_03 Find product by name and click Add to Cart.",async({page})=>{

//    await  page.goto("https://www.saucedemo.com/")
//    await  page.locator('input[data-test="username"]').fill("standard_user")
//    await  page.locator('input[data-test="password"]').fill("secret_sauce")
//    await  page.locator('input[data-test="login-button"]').click()
//    await page.getByText('Products').waitFor({state:'visible',timeout:2000})
await page.goto("https://www.saucedemo.com/inventory.html")
    await expect(page).toHaveURL(/inventory/)

   const products = await page.locator('[data-test="inventory-item-name"]')
   const names = await products.allTextContents()
    console.log(names)

    const prices = await page.locator('[data-test="inventory-item-price"]')
    const allPrices = await prices.allTextContents()
    console.log(allPrices)


    const productName = "Sauce Labs Fleece Jacket"
    const product = await page.locator('[data-test="inventory-item"]').filter({hasText:productName})
    await product.locator('[data-test^="add-to-cart"]').click()
    //await page.pause()

} )
test("TC_04 Verify all products are displayed.",async({page})=>{

//    await  page.goto("https://www.saucedemo.com/")
//    await  page.locator('input[data-test="username"]').fill("standard_user")
//    await  page.locator('input[data-test="password"]').fill("secret_sauce")
//    await  page.locator('input[data-test="login-button"]').click()
//    await page.getByText('Products').waitFor({state:'visible',timeout:2000})

await page.goto("https://www.saucedemo.com/inventory.html")
    await expect(page).toHaveURL(/inventory/)
 
const products = await page.locator('[data-test="inventory-item-name"]').allTextContents()
const prices = await page.locator('[data-test="inventory-item-price"]').allTextContents()
const product_desc = await page.locator('[data-test="inventory-item-desc"]').allTextContents()
const product_ATC = await page.locator('[data-test^="add-to-cart"]').count()

if (products.length === 0) throw new Error("No product displayed")
    if(products.length !== prices.length || products.length !== product_desc.length) throw new Error("MissMathc in product items")


    } )
test("TC_05 Verify all products ITEMS are displayed.",async({page})=>{

//    await  page.goto("https://www.saucedemo.com/")
//    await  page.locator('input[data-test="username"]').fill("standard_user")
//    await  page.locator('input[data-test="password"]').fill("secret_sauce")
//    await  page.locator('input[data-test="login-button"]').click()
//    await page.getByText('Products').waitFor({state:'visible',timeout:2000})
await page.goto("https://www.saucedemo.com/inventory.html")
    await expect(page).toHaveURL(/inventory/)

const products = await page.locator('[data-test="inventory-item"]')
const count = await products.count()
    console.log(count)
for (let i=0;i<count;i++){
   await expect( await products.nth(i)).toBeVisible()
   
   console.log(await products.nth(i).textContent())
}
    } )
test("TC_06 verify product price",async({page})=>{

//    await  page.goto("https://www.saucedemo.com/")
//    await  page.locator('input[data-test="username"]').fill("standard_user")
//    await  page.locator('input[data-test="password"]').fill("secret_sauce")
//    await  page.locator('input[data-test="login-button"]').click()
//    await page.getByText('Products').waitFor({state:'visible',timeout:2000})
await page.goto("https://www.saucedemo.com/inventory.html")
    await expect(page).toHaveURL(/inventory/)
    const product = await page.locator('[data-test="inventory-item"]').filter({hasText:"Sauce Labs Bike Light"})
    const p_price = await product.locator('[data-test="inventory-item-price"]')
    await expect(p_price).toHaveText("$9.99")
    } )

    test("TC_07 validate new page FB context",async({page,context})=>{

//    await  page.goto("https://www.saucedemo.com/")
//    await  page.locator('input[data-test="username"]').fill("standard_user")
//    await  page.locator('input[data-test="password"]').fill("secret_sauce")
//    await  page.locator('input[data-test="login-button"]').click()
//    await page.getByText('Products').waitFor({state:'visible',timeout:2000})
       await page.goto("https://www.saucedemo.com/inventory.html")
    await expect(page).toHaveURL(/inventory/) 
   const newPromisePage = context.waitForEvent('page')
  await page.locator('[data-test="social-facebook"]').click()
        const newPage = await newPromisePage
       await  newPage.waitForLoadState('domcontentloaded')
    console.log(await newPage.title())
    //await page.pause()
    } )


    
    test("TC_08 interact with Old page and New Page",async({page,context})=>{

//    await  page.goto("https://www.saucedemo.com/")
//    await  page.locator('input[data-test="username"]').fill("standard_user")
//    await  page.locator('input[data-test="password"]').fill("secret_sauce")
//    await  page.locator('input[data-test="login-button"]').click()
//    await page.getByText('Products').waitFor({state:'visible',timeout:2000})
        await page.goto("https://www.saucedemo.com/inventory.html")
    await expect(page).toHaveURL(/inventory/)
   const newPromisePage = context.waitForEvent("page")
   await page.locator('[data-test="social-linkedin"]').click()
       const newPage = await newPromisePage
        await newPage.waitForLoadState('domcontentloaded')
        //new page interaction
        console.log("new page title : "+ await newPage.title())
        console.log("new page url : "+ await newPage.url())
        //old page interaction
        console.log("Old Page title: "+ await page.title())
        console.log("Old Page URL: "+ await page.url())


    } )


 
