///<reference types= "cypress"/>

import ProductPageElements from "../page-elements/product-page-elements";
import Validaitons from "../support/validations";

export default class ProductPage extends Validaitons{
    elementsPage = new ProductPageElements()

    getSendToAFriendBtn(){
        return cy.get(this.elementsPage.sendToAFriendBtn)
    }
    getFriendsNameInput(){
        return cy.get(this.elementsPage.friendsNameInput)
    }
    getFriendsEmailInut(){
        return cy.get(this.elementsPage.friendsEmailInput)
    }
    getSendBtn(){
        return cy.get(this.elementsPage.sendBtn)
    }
    getModalOkBtn(){
        return cy.get(this.elementsPage.modalOkBtn)
    }
    getColors(color){
        return cy.get(this.elementsPage.getColors(color))
    }
    getSizes(){
        return cy.get(this.elementsPage.sizes)
    }
    getAddToCartBtn(){
        return cy.get(this.elementsPage.addToCartBtn)
    }
    clickSendToAFriend(){
        this.getSendToAFriendBtn().click()
    }
    enterFriendsName(name){
        this.getFriendsNameInput().type((name))
    }
    enterFriendsEmail(email){
        this.getFriendsEmailInut().type(email)
    }
    clickSend(){
        this.getSendBtn().click().wait(3000)
    }
    clickOk(){
        this.getModalOkBtn().click()
    }
    conductSendToAFriendAndValidate(name,email,text){
        this.clickSendToAFriend()
        this.enterFriendsName(name)
        this.enterFriendsEmail(email)
        this.validateAnElementContainsText(this.elementsPage.modalText,text)
        this.clickSend()
        this.clickOk()
        this.validateAnElementIsNotVisible(this.elementsPage.modal)
    }
    chooseColor(color){
        this.getColors(color).click()
    }
    chooseSize(size){
        this.getSizes().select(size)
    }
    clickAddToCart(){
        this.getAddToCartBtn().click()
    }

}