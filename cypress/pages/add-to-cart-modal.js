///<reference types= "cypress"/>

import AddToCartModalElements from "../page-elements/add-to-cart-modal-elements";
import { testData } from "../support/test-data";
import Validaitons from "../support/validations";

export default class AddToCartModal extends Validaitons{
    pageElements = new AddToCartModalElements()

    getContinueShoppingBtn(){
        return cy.get(this.pageElements.continueShoppingBtn)
    }
    getProceedToCheckoutBtn(){
        return cy.get(this.pageElements.proceedToCheckoutBtn)
    }

    clickContinueShopping(){
        this.getContinueShoppingBtn().click()
    }
    clickProceedToCheckOut(){
        this.getProceedToCheckoutBtn().click()
    }
    continueShoppingAndValidate(){
        this.validateAnElementContainsText(this.pageElements.addedProductDetails,`${testData.product.color+', '+testData.product.size}`)
        this.clickContinueShopping()
    }
    proceedToCheckoutAndValidate(item){
        this.clickProceedToCheckOut()
        this.validateTheUserIsOnTheCorrectPage(testData.pageNavigation.shoppingCart)
        this.validateTheCartHasItems(item)
    }
}