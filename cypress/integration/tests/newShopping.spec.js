///<reference types= "cypress"/>

import AddToCartModal from "../../pages/add-to-cart-modal"
import HomePage from "../../pages/home-page"
import ProductComparisonPage from "../../pages/product-comparison"
import ProductPage from "../../pages/product-page"
import SearchResultPage from "../../pages/search-result-page"


describe("Should test shopping flow", ()=>{
    const homePage = new HomePage()
    const searchResultPage = new SearchResultPage()
    const productPage = new ProductPage()
    const addToCartModal = new AddToCartModal()
    const productComparisonpage = new ProductComparisonPage()

    before(()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.clearCookies()
    })
    beforeEach(()=>{
        Cypress.Cookies.preserveOnce('PrestaShop-a30a9934ef476d11b6cc3c983616e364')
    })

    // it('should conduct search', ()=>{
    //    homePage.conductSearchAndValidate('shirt')
    // })
    // it('should open the first product',()=>{
    //     searchResultPage.openFirstProductAndValidate()
    // })
    // it('should recommend to a friend', ()=>{
    //     productPage.conductSendToAFriendAndValidate('someone','else@elsewhere.com','Send to a friend')
    // })
    // it('should choose color, size, and add to cart', ()=>{
    //     const color = 'Blue'
    //     const size = 'M'
    //     productPage.chooseColorSizeAddToCartAndValidate(color,size)
    //     addToCartModal.continueShoppingAndValidate(color,size)
        
    // })
    it('should check item is added and go to dresses', ()=>{
        homePage.validateItemIsAddedToCart(0)
        homePage.clickDressesLinkAndValidate()
    })
    it('should choose 2 dresses to compare', ()=>{
        searchResultPage.chooseTwoDressesToCompareAndValidate()
    })
    it('should choose the 20% discount dress', ()=>{
        productComparisonpage.addToCartProductAndValidate()
    })
})
