///<reference types= "cypress"/>

import HomePage from "../../pages/home-page"
import ProductPage from "../../pages/product-page"
import SearchResultPage from "../../pages/search-result-page"


describe("Should test shopping flow", ()=>{
    const homePage = new HomePage()
    const searchResultPage = new SearchResultPage()
    const productPage = new ProductPage()

    before(()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.clearCookies()
    })
    beforeEach(()=>{
        Cypress.Cookies.preserveOnce('PrestaShop-a30a9934ef476d11b6cc3c983616e364')
    })

    it('should conduct search', ()=>{
       homePage.conductSearch('shirt')
    })
    it('should open the first product',()=>{
        searchResultPage.openFirstProduct()
    })
    it('should recommend to a friend', ()=>{
        productPage.conductSendToAFriend('someone','else@elsewhere.com','Send to a friend')
    })
})