const productLocators = {
    productTitle:'span[data-test="title"]',
    openMenu :"button[id='react-burger-menu-btn']",
    menuAbout:'a[data-test="about-sidebar-link"]',
    menuLogout:'a[data-test="logout-sidebar-link"]',
    menuAbout_bookADemo :'a[href="/request-demo"]',
        menuAbout_bookADemoNew:'a:has-text("Book a Demo")',
        menuAbout_Login:'a:has-text("Login")',

    cartMenu:'a[data-test="shopping-cart-link"]',

    inventoryItem:'[data-test="inventory-item"]',
    product_Name:'div[data-test^="inventory-item-name"]',
    product_Desc:'div[data-test="inventory-item-desc"]',
    product_Price:'div[data-test="inventory-item-price"]',
    product_ATC:'button[data-test^="add-to-cart"]',    

}
module.exports=productLocators