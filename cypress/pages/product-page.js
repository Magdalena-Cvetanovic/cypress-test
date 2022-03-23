///<reference types= "cypress"/>

import ProductPageElements from "../page-elements/product-page-elements";
import { testData } from "../support/test-data";
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
    getColors(){
        return cy.get(this.elementsPage.getColors(testData.product.color))
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
    enterFriendsName(){
        this.getFriendsNameInput().type((testData.sendToAFriend.name))
    }
    enterFriendsEmail(){
        this.getFriendsEmailInut().type(testData.sendToAFriend.email)
    }
    clickSend(){
        this.getSendBtn().click().wait(4000)
    }
    clickOk(){
        this.getModalOkBtn().click()
    }
    conductSendToAFriendAndValidate(){
        this.clickSendToAFriend()
        this.enterFriendsName()
        this.enterFriendsEmail()
        this.validateAnElementContainsText(this.elementsPage.modalText,testData.sendToAFriend.modalText)
        this.clickSend()
        this.clickOk()
        this.validateAnElementIsNotVisible(this.elementsPage.modal)
    }
    chooseColor(){
        this.getColors(testData.product.color).click()
    }
    chooseSize(){
        this.getSizes().select(testData.product.size)
    }
    clickAddToCart(){
        this.getAddToCartBtn().click().wait(4000)
    }
    chooseColorSizeAddToCartAndValidate(){
        this.chooseColor()
        this.chooseSize()
        this.clickAddToCart()
    }

}