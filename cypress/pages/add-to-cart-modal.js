///<reference types= "cypress"/>

import AddToCartModalElements from "../page-elements/add-to-cart-modal-elements";
import Validaitons from "../support/validations";

export default class AddToCartModal{
    pageElements = new AddToCartModalElements()
    validations = new Validaitons()

    clickContinueShopping(){
        cy.get(this.pageElements.getContinueShoppingBtn()).click()
    }
    clickProceedToCheckOut(){
        cy.get(this.pageElements.getProceedToCheckoutBtn().click())
    }
    continueShopping(color,size){
        this.clickContinueShopping()
        this.validations.validateAnElementContainsText(this.pageElements.getAddedProductDetails,color,size)
    }
}