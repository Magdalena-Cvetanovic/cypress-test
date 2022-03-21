///<reference types= "cypress"/>

import AddToCartModalElements from "../page-elements/add-to-cart-modal-elements";
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
    continueShoppingAndValidate(color,size){
        this.validateAnElementContainsText(this.pageElements.addedProductDetails,color,size)
        this.clickContinueShopping()
    }
    proceedToCheckoutAndValidate(page,item){
        this.clickProceedToCheckOut()
        this.validateTheUserIsOnTheCorrectPage(page)
        this.validateTheCartHasItems(item)
    }
}