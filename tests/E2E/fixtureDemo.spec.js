const {test,expect} = require('../../fixture/auth.fixture')
test("validate fixture",async ({loginPage})=>{

    await loginPage.locator('span[data-test="title"]').waitFor({state:'visible',timeout:2000})
await     expect(loginPage).toHaveURL(/inventory/)
await expect(loginPage.locator('span[data-test="title"]')).toBeVisible()
await loginPage.pause()
})