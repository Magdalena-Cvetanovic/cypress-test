///<reference types= "cypress"/>

import { fillOutCreationForm } from "../../page-objects/account-creation-actions"
import { createNewAccount, proceedToCheckout, signIn } from "../../page-objects/checkout-page-actions"
import { clickDresses, conductSearch } from "../../page-objects/home-page-actions"
import { addToCartBiggerDiscountDress, chooseColor, chooseSize, clickAddToCart, clickContinueShopping, clickOkToCloseModal, clickToProceedToCheckout, getProductsToCompare, sendToAFriend } from "../../page-objects/product-page-actions"
import { checkTermsOfService, choosePayment, clickCompareBtn, collectElementsWithDiscount, hoverToProductAndClickAddToCompare, openFirstProduct } from "../../page-objects/search-result-page-actions"
import { validateAnElementContainsText, validateAnElementIsChecked, validateAnElementIsNotVisible, validateAnElementIsVisible, validateTheUrlHasChanged } from "../../page-objects/validations"

describe("Should test shopping flow", ()=>{

    before(()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.clearCookies()
    })
    beforeEach(()=>{
        Cypress.Cookies.preserveOnce('PrestaShop-a30a9934ef476d11b6cc3c983616e364')
    })
    it('should search something', ()=>{
        conductSearch('shirt')
        validateAnElementContainsText('.lighter', 'shirt')
    })
    it('should open the product', ()=>{
        openFirstProduct()
        validateAnElementContainsText('h1', 'Faded Short')
    })
    it('should recommend to a friend', ()=>{
        sendToAFriend('name', 'email@email.com')
        cy.wait(2000)
        validateAnElementContainsText('.fancybox-inner > h2','Send to a friend')
        clickOkToCloseModal()
        validateAnElementIsNotVisible('.fancybox-skin')
    })
    it('should chose size and color and add to cart', ()=>{
        chooseSize('M')
        chooseColor('Blue')
        cy.wait(2000)
        clickAddToCart()
        validateAnElementContainsText('#layer_cart_product_attributes', 'Blue, M')
    })
    it('should continue shoppoing and go to dresses', ()=>{
        clickContinueShopping()
        cy.scrollTo('topRight')
        validateAnElementContainsText('.ajax_cart_quantity', '1')
        clickDresses()
        validateAnElementContainsText('.cat-name', 'Dresses')
    })
    it('should choose 2 dresses to compare', ()=>{
        cy.scrollTo('center')
        const discounted = []
        collectElementsWithDiscount('.product_list>li',discounted)
        hoverToProductAndClickAddToCompare(discounted)
        validateAnElementContainsText('.bt_compare_bottom','2')
        clickCompareBtn()
    })
    it('should choose the bigger discount, add to cart, and go to checkout', ()=>{
        const products = []
        getProductsToCompare(products,'#product_comparison >tbody>tr>td')
        addToCartBiggerDiscountDress(products,'[title="Add to cart"]')
        validateAnElementContainsText('.layer_cart_product','Product successfully added')
        clickToProceedToCheckout()
        validateAnElementContainsText('#cart_title', 'Shopping-cart')
    })
    it('should go through checkout',()=>{
        validateTheUrlHasChanged('display_guest_checkout')
        proceedToCheckout()
    })
    it('should create a new account with existing email', ()=>{
        createNewAccount('someone@mailinator.com')
        validateAnElementIsVisible('#create_account_error')
    })
    it.skip('should create a new account', ()=>{
        createNewAccount('someoneNew@mailinator.com')
        validateTheUrlHasChanged("#account-creation")
    })
    it.skip('should fill out the account creation form', ()=>{
        fillOutCreationForm('male','test','test','password','10','7','1995','random address','random city','Texas','18000','055324254','some alias')
        validateTheUrlHasChanged('step=1')
    })
    it('should login with existing account', ()=>{
        signIn('someoneNew@mailinator.com', 'password')
        validateTheUrlHasChanged('step=1')

    })
    it('should complete the checkout process', ()=>{
        cy.scrollTo('center')
        proceedToCheckout()
        validateAnElementContainsText('h1', 'Shipping')
        checkTermsOfService()
        validateAnElementIsChecked('#cgv')
        proceedToCheckout()
        validateAnElementContainsText('h1', 'payment method')
        choosePayment('check.')
        validateAnElementContainsText('.navigation_page', 'Check')
        proceedToCheckout()
        validateAnElementContainsText('.navigation_page', 'Order confirmation')
        
    })
       
})
