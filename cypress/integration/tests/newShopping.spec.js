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

    it('should conduct search,open the first product, recommend to a friend, choose color, size, and add to cart', () => {
        homePage.conductSearch()
        searchResultPage.validateCorrectTermIsSearched()
        searchResultPage.openFirstProduct()
        productPage.validateCorrectProductIsOpened()
        productPage.validateProductPricesMatch()
        productPage.conductSendToAFriendAndValidate()
        productPage.chooseColorSizeAddToCartAndValidate()
        addToCartModal.continueShoppingAndValidate()
    })
    it('should choose 2 dresses to compare', () => {
        homePage.clickDressesLinkAndValidate(1)
        searchResultPage.findProductPrices()
        cy.log(searchResultPage.getProductPrices())
        searchResultPage.findLowestProducts()
        searchResultPage.findProductsWithLowestValueToCompare()
        searchResultPage.chooseTwoDressesToCompareAndValidate()
        productComparisonPage.addToCartProductAndValidate()
        addToCartModal.proceedToCheckoutAndValidate(2)
        shoppingCartPage.clickProceedToCheckoutSummaryAndValidate(testData.pageNavigation.authentication)
        shoppingCartPage.createNewAccountWIthExistingEmaillAndValidate()
        // shoppingCartPage.createNewAccountAndValidate()
        // accountCreationPage.fillOutCreationForm()
        shoppingCartPage.loginAndValidate(testData.pageNavigation.addresses)
        shoppingCartPage.clickProceedToCheckoutStepsAndValidate(testData.pageNavigation.shipping)
        shoppingCartPage.checkTermsOfServiceAndValidate()
        shoppingCartPage.clickProceedToCheckoutStepsAndValidate(testData.pageNavigation.payment)
        shoppingCartPage.choosePaymentMethod(testData.pageNavigation.bankMethod)
        shoppingCartPage.clickProceedToCheckoutStepsAndValidate(testData.pageNavigation.confirmation)
    })
})
