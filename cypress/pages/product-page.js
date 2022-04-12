///<reference types= "cypress"/>

import ProductPageElements from "../page-elements/product-page-elements";
import { testData } from "../support/test-data";
import Validaitons from "../support/validations";

export default class ProductPage extends Validaitons{
    elementsPage = new ProductPageElements()

    getProductName(){
        return cy.get(this.elementsPage.productName)
    }
    getProductPrice(){
        return cy.get(this.elementsPage.productPrice)
    }
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
        return this.elementsPage.getColors(testData.product.color)
    }
    getColor(){
        return cy.get(this.getColors())
    }
    getSizes(){
        return cy.get(this.elementsPage.sizes)
    }
    getAddToCartBtn(){
        return cy.get(this.elementsPage.addToCartBtn)
    }
    validateCorrectProductIsOpened(){
        this.getProductName().invoke('text').then((productName)=>{
            cy.get('@productName').should('equal', productName)
        })
    }
    validateProductPricesMatch(){
        this.getProductPrice().invoke('text').invoke('split','$').its(1).then((productPrice)=>{
            cy.get('@productPrice').should('equal',productPrice)
        })
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
        this.getSendBtn().click()
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
        this.validateAnElementShouldExist(this.elementsPage.modal, false)
    }
    chooseColor(){
        this.getColor(testData.product.color).click()
    }
    validateCorrectColorIsSelected(){
        this.validateAnElementIsSelected(this.getColors())
    }
    chooseSize(){
        this.getSizes().select(testData.product.size)
    }
    validateCorrectSizeIsSelected(){
        this.validateAnElementHasText(this.elementsPage.selectedSize, testData.product.size)
    }
    clickAddToCart(){
        this.getAddToCartBtn().click()
    }
    chooseColorSizeAddToCartAndValidate(){
        this.chooseColor()
        this.validateCorrectColorIsSelected()
        this.chooseSize()
        this.validateCorrectSizeIsSelected()
        this.clickAddToCart()
    }

}