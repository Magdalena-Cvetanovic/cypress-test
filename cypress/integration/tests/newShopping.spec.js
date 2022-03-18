///<reference types= "cypress"/>

import AddToCartModal from "../../pages/add-to-cart-modal"
import HomePage from "../../pages/home-page"
import ProductPage from "../../pages/product-page"
import SearchResultPage from "../../pages/search-result-page"


describe("Should test shopping flow", ()=>{
    const homePage = new HomePage()
    const searchResultPage = new SearchResultPage()
    const productPage = new ProductPage()
    const addToCartModal = new AddToCartModal()

    before(()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.clearCookies()
    })
    beforeEach(()=>{
        Cypress.Cookies.preserveOnce('PrestaShop-a30a9934ef476d11b6cc3c983616e364')
    })

    it('should conduct search', ()=>{
       homePage.conductSearchAndValidate('shirt')
    })
    it('should open the first product',()=>{
        searchResultPage.openFirstProductAndValidate()
    })
    it('should recommend to a friend', ()=>{
        productPage.conductSendToAFriend('someone','else@elsewhere.com','Send to a friend')
    })
    it('should choose color, size, and add to cart', ()=>{
        const color = 'Blue'
        const size = 'M'
        productPage.chooseColor(color)
        productPage.chooseSize(size)
        productPage.clickAddToCart()
        addToCartModal.continueShopping(color,size)
        
    })
    it('should check item is added and go to dresses', ()=>{
        homePage.validateItemIsAddedToCart(1)
        homePage.clickDressesLink()
    })
})
