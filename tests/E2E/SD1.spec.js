const{test,expect}=require('@playwright/test')

test("tc01_Extract all product names.",async({page})=>{
    //await page.pause()
    await page.goto("https://www.saucedemo.com/inventory.html")
const products = await page.locator('[data-test="inventory-item-name"]')
   const count = await  products.count()
   console.log("total products count: "+ count) 
   console.log("All products : "+await products.allTextContents())

//to get the status of button changed from Add to cart to Remove
    const productName = "Sauce Labs Bike Light"
    const validProduct = await page.locator('[data-test="inventory-item"]').filter({hasText:productName})
    await validProduct.locator('[data-test^="add-to-cart"]').click()
    const buttonName1=await validProduct.getByRole('button').filter("hasText:/./").last()
   const buttonName2=await validProduct.getByRole('button').filter("hasText:/./").first()
   // const buttonName3=await validProduct.getByRole('button').filter("hasText:/./").nth(1)
   // console.log(await buttonName2.innerText())
    console.log(await buttonName1.innerText())
       console.log(await buttonName2.innerText())
})
test("tc02_Extract all prices.",async({page})=>{
   // await page.pause()
    await page.goto("https://www.saucedemo.com/inventory.html")

   const price =  await page.locator('[data-test="inventory-item-price"]').allTextContents()
    console.log(`all price are : ${price}`)

})
test("tc03_ Find product by name and click Add to Cart.",async({page})=>{
    //await page.pause()
    await page.goto("https://www.saucedemo.com/inventory.html")

   const productName = "Sauce Labs Bike Light"
   const validProduct1 = await page.locator('[data-test="inventory-item"]').filter({hasText:productName})
    await validProduct1.locator('[data-test^="add-to-cart"]').click()
})
test("tc04_ Verify all products are displayed.",async({page})=>{
    //await page.pause()
    await page.goto("https://www.saucedemo.com/inventory.html")

   //await page.pause()
   const product = await page.locator('[data-test="inventory-item"]')
    const count = await product.count()
    console.log(`count of products: ${count}`)
    for(let i=0;i<count;i++){
        await expect(await product.nth(i)).toBeVisible()
        console.log(await product.nth(i).textContent())
    }

})
test("tc05_ Verify product price.",async({page})=>{
    //await page.pause()
    await page.goto("https://www.saucedemo.com/inventory.html")

  const product = await page.locator('[data-test="inventory-item"]')
  const count = await product.count()
  for(let i=0;i<count;i++){
   const price =  await product.nth(i).locator('[data-test="inventory-item-price"]')
   const name =  await product.nth(i).locator('[data-test="inventory-item-name"]')

   console.log(`product name : ${await name.textContent()}
    price : ${await price.textContent()}`)
  }

await expect(product.filter({hasText:"Sauce Labs Onesie"}).locator('[data-test="inventory-item-price"]')).toHaveText("$7.99")
})
test("tc06_ handle multiple tabs",async({page,context})=>{
    //await page.pause()
    await page.goto("https://www.saucedemo.com/inventory.html")
   const newPromisePage = context.waitForEvent("page")
   await page.locator('[data-test="social-linkedin"]').click()
            const newPage=await newPromisePage
    await newPage.waitForLoadState("domcontentloaded")
    console.log(await newPage.title())
    console.log(await newPage.url())
    //old page
    console.log(await page.title())
    console.log(await page.url())


})
test("tc07_Handle iframe.",async({page})=>{
    //await page.pause()
    await page.goto("https://practice-automation.com/iframes/")
    const frame =  page.frameLocator("#iframe-2")
    //await frame.getByRole('link',{name:"/selenium-webdriver/"}).click()

   // await frame.locator('[class^="selenium-webdriver"]').click()
    const readMore_seleniumWebDriver = await frame.locator('a[href="/documentation/webdriver/"]')
    const readMore_selenium_IDE = await frame.locator('a[href="https://selenium.dev/selenium-ide/"]')
    const readMore_selenium_grid = await frame.locator('a[href="/documentation/grid/"]')

    await readMore_selenium_grid.click()
    
})
test("tc08_upload files",async({page})=>{
   // await page.pause()
    await page.goto("https://practice-automation.com/file-upload/?utm_source=chatgpt.com")
 await page.locator('#file-upload').setInputFiles("C:\\Users\\user\\OneDrive\\Pictures\\shiva.png")
await page.locator('#upload-btn').click()
const errorMessage=await page.getByText('Thank you for your message. It has been sent.').first()
await expect(errorMessage).toBeVisible()
// console.log(await successfullMessage)
})
test("tc0 8.5_Multiple upload files",async({page})=>{
   // await page.pause()
    await page.goto("https://testkru.com/Elements/Files")
    try{
    await page.locator('#multiFileUpload').waitFor({state:'visible',timeout:5000})
    }catch(error){
        await page.screenshot({path:"screenshot/MultipleUploadFailed.png",fullPage:true})
        throw error
    }
   // await page.locator('a[href="/Elements/Files"]').click()
 await page.locator('#multiFileUpload').setInputFiles(["C:\\Users\\user\\OneDrive\\Pictures\\shiva.png","C:\\Users\\user\\OneDrive\\Pictures\\vivek.png"])
//await page.locator('#multiFileUpload').click()
//const errorMessage=await page.getByText('Thank you for your message. It has been sent.').first()
//await expect(errorMessage).toBeVisible()
// console.log(await successfullMessage)
})
test("tc09_Download a normal file.",async({page})=>{
   // await page.pause()
    await page.goto("https://practice-automation.com/file-download/?utm_source=chatgpt.com")

const newPromisePage= page.waitForEvent("download")
await page.getByRole('link',{name:'Download'}).nth(2).click()
const newDownload = await newPromisePage
     console.log(`downloaded File name ${newDownload.suggestedFilename()}   `)
    await newDownload.saveAs(`newDownload ${newDownload.suggestedFilename()}`)


})
test.skip("tc10_Download a password protected file.",async({page})=>{
   // await page.pause()
    await page.goto("https://practice-automation.com/file-download/?utm_source=chatgpt.com")

    await page.locator('a[href="#unlock"]').click()


      const inputBox = await page.getByPlacehole("Enter Password")
    await expect(inputBox).toBeVisible()
    await page.getByPlacehole("Enter Password").fill("arun@123")
    const newPromisePage = page.waitForEvent("download")
      const downloadProtectedFile = await newPromisePage
    await page.locator('input[type="submit"]').click()
    


    // console.log(downloadProtectedFile.suggestedFilename())

    // downloadProtectedFile.saveAs(`downloadProtectedFile ${downloadProtectedFile.suggestedFilename()}`)


})

test("TC_11 take screenshot",async ({page})=>{

    try {
        await page.goto("https://www.saucedemo.com/inventory.html")
        await expect(await page.getByText('Products')).toBeVisible()
    }catch(error){
        await page.screenshot({
            path:'screenshot/failure.png',
            fullPage:true
        })
    throw error
    }
})


