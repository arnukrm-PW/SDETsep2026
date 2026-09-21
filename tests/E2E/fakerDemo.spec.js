const {test,expect} = require('@playwright/test')
const { faker } = require('@faker-js/faker')
const {createUser} = require('../../factory/dataFactory')

test("1. login fakers",async ({page})=>{
    const user = createUser()
    await page.goto("https://automationexercise.com/login")
   // await page.pause()
    await page.locator('input[data-qa="signup-name"]').fill(user.firstName)
    await page.locator('input[data-qa="signup-email"]').fill(user.email)
    await page.locator('button[data-qa="signup-button"]').click()
    await page.locator('input[data-qa="password"]').waitFor({state:'visible',timeout:2000})
    await page.locator('input[data-qa="password"]').fill(user.password)
await page.selectOption('select[data-qa="days"]',user.day)
await page.selectOption('select[data-qa="months"]',user.month)
await page.selectOption('select[data-qa="years"]',user.year)

      // await page.locator('select[data-qa="days"]').fill(user.day)
      //  await page.locator('select[data-qa="months"]').fill(user.month)
       // await page.locator('select[data-qa="years"]').fill(user.year)

       await page.locator('#newsletter').check()
       await page.locator('input[data-qa="first_name"]').fill(user.firstName)
       await page.locator('input[data-qa="last_name"]').fill(user.lastName) 



})