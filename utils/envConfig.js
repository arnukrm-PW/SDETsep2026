const ENV_URL = {
    dev:"https://www.saucedemo.com/dev",
    qa:"https://www.saucedemo.com/",
    stage:"https://testautomationpractice.blogspot.com/",
    prod:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
}
const ENV = process.env.ENV || "qa"

const BASE_URL =  ENV_URL[ENV]
const USERNAME = 'standard_user'
const PASSWORD = 'secret_sauce'

module.exports={BASE_URL,USERNAME,PASSWORD}
// const ENV_URL={
//     dev:"https://www.saucedemo.com/",
//     qa:"https://www.geeksforgeeks.org/javascript/javascript-tutorial/",
//     stage:"https://testautomationpractice.blogspot.com/",
//     prod:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
// }

// const ENV = process.env.ENV || "prod"
// const BASE_URL = ENV_URL[ENV]
// const USERNAME = 'standard_user'
// const PASSWORD = 'secret_sauce'

// module.exports={BASE_URL,USERNAME,PASSWORD}

// const ENV_URL = {
//          dev : "https://www.saucedemo.com/",
//        qa : "https://www.geeksforgeeks.org/javascript/javascript-tutorial/",
//     stage : "https://testautomationpractice.blogspot.com/",
//     prod : "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

// }

// const ENV = process.env.ENV || "prod"

// const BASE_URL = ENV_URL[ENV]
// const USERNAME="standard_user"
// const PASSWORD=  "secret_sauce"

// module.exports={BASE_URL,USERNAME,PASSWORD}

// //export const BASE_URL = "https://www.saucedemo.com/";

// const ENV_URL = {
//     dev : "https://www.saucedemo.com/",
//     qa : "https://www.geeksforgeeks.org/javascript/javascript-tutorial/",
//     stage : "https://testautomationpractice.blogspot.com/",
//     prod : "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
// };

// const ENV = process.env.ENV || "prod"
//  const BASE_URL = ENV_URL [ENV]

//  const USERNAME = "standard_user";
//  const PASSWORD = "secret_sauce";

//  module.exports= {BASE_URL,USERNAME,PASSWORD}