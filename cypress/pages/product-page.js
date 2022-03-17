///<reference types= "cypress"/>

import ProductPageElements from "../page-elements/product-page-elements";
import Validaitons from "../support/validations";

export default class ProductPage{
    elementsPage = new ProductPageElements()
    validations = new Validaitons()

    clickSendToAFriend(){
        cy.get(this.elementsPage.getSendToAFriendBtn()).click()
    }
    enterFriendsName(name){
        cy.get(this.elementsPage.getFriendsNameInput()).type((name))
    }
    enterFriendsEmail(email){
        cy.get(this.elementsPage.getFriendsEmailInut()).type(email)
    }
    clickSend(){
        cy.get(this.elementsPage.getSendBtn()).click()
    }
    clickOk(){
        cy.get(this.elementsPage.getModalOkBtn()).click()
    }
    conductSendToAFriend(name,email,text){
        this.clickSendToAFriend()
        this.enterFriendsName(name)
        this.enterFriendsEmail(email)
        this.validations.validateAnElementContainsText(this.elementsPage.getModalText,text)
        this.clickSend()
        this.clickOk()
    }

}