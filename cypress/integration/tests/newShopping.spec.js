///<reference types= "cypress"/>

import AddToCartModal from "../../pages/add-to-cart-modal"
import HomePage from "../../pages/home-page"
import ProductComparisonPage from "../../pages/product-comparison"
import ProductPage from "../../pages/product-page"
import SearchResultPage from "../../pages/search-result-page"
import CheckoutPage from "../../pages/checkout-page"
import AccountCreationPage from "../../pages/account-creation-page"
import { testData } from "../../support/test-data"

describe("Should test shopping flow", () => {
    Cypress.config('defaultCommandTimeout', 20000)

    const homePage = new HomePage()
    const searchResultPage = new SearchResultPage()
    const productPage = new ProductPage()
    const addToCartModal = new AddToCartModal()
    const productComparisonPage = new ProductComparisonPage()
    const shoppingCartPage = new CheckoutPage()
    const accountCreationPage = new AccountCreationPage()

    before(() => {
        cy.visit('http://automationpractice.com/index.php')
        cy.clearCookies()
    })
    beforeEach(() => {
        Cypress.Cookies.preserveOnce(testData.cookies.cartItems)
    })

    it('should conduct search', () => {
        homePage.conductSearchAndValidate()
    })
    it('should open the first product', () => {
        searchResultPage.openFirstProductAndValidate()
    })
    it('should recommend to a friend', () => {
        productPage.conductSendToAFriendAndValidate()
    })
    it('should choose color, size, and add to cart', () => {
        productPage.chooseColorSizeAddToCartAndValidate()
        addToCartModal.continueShoppingAndValidate()
    })
    // it('should check item is added and go to dresses', () => {
    //     homePage.clickDressesLinkAndValidate(1)
    // })
    // it('should choose 2 dresses to compare', () => {
    //     searchResultPage.chooseTwoDressesToCompareAndValidate()
    // })
    // it('should choose the 20% discount dress and go to checkout', () => {
    //     productComparisonPage.addToCartProductAndValidate()
    //     addToCartModal.proceedToCheckoutAndValidate(2)
    //     shoppingCartPage.clickProceedToCheckoutSummaryAndValidate(testData.pageNavigation.authentication)
    //     shoppingCartPage.createNewAccountWIthExistingEmaillAndValidate()
    // })
    // it.skip('should create a new account',()=>{
    //     shoppingCartPage.createNewAccountAndValidate()
    //     accountCreationPage.fillOutCreationForm()
    // })
    // it('should complete checkout process', () => {
    //     shoppingCartPage.loginAndValidate(testData.pageNavigation.addresses)
    //     shoppingCartPage.clickProceedToCheckoutStepsAndValidate(testData.pageNavigation.shipping)
    //     shoppingCartPage.checkTermsOfServiceAndValidate()
    //     shoppingCartPage.clickProceedToCheckoutStepsAndValidate(testData.pageNavigation.payment)
    //     shoppingCartPage.choosePaymentMethod(testData.pageNavigation.checkMethod)
    //     shoppingCartPage.clickProceedToCheckoutStepsAndValidate(testData.pageNavigation.confirmation)
    // })
})
