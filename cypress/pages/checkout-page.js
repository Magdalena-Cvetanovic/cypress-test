///<reference types = "cypress"/>

import CheckoutPageElements from "../page-elements/checkout-page-elements";
import Validaitons from "../support/validations";

export default class CheckoutPage extends Validaitons{
    pageElements = new CheckoutPageElements

    getProceedToCheckoutSummaryBtn(){
        return cy.get(this.pageElements.proceedToCheckOutSummaryBtn)
    }
    getProceedToCheckoutStepsBtn(){
        return cy.get(this.pageElements.proceedToCheckoutStepsBtn)
    }
    getNewUAccountEmailInput(){
        return cy.get(this.pageElements.newAccountEmailInput)
    }
    getCreateNewAccountBtn(){
        return cy.get(this.pageElements.createAccountBtn)
    }
    getExistingAccountEmailInput(){
        return  cy.get(this.pageElements.existingAccountEmailInput)
    }
    getExistingAccountPasswordInput(){
        return cy.get(this.pageElements.existingAccountPasswordInput)
    }
    getSignInBtn(){
        return cy.get(this.pageElements.signInBtn)
    }
    getCheckbox(){
        return cy.get(this.pageElements.checkbox)
    }
    getPaymentMethod(method){
        return cy.get(this.pageElements.getPaymentMethods(method))
    }
    clickProceedToCheckoutSummaryAndValidate(page){
        this.getProceedToCheckoutSummaryBtn().click()
        this.validateTheUserIsOnTheCorrectPage(page)
    }
    clickProceedToCheckoutStepsAndValidate(page){
        this.getProceedToCheckoutStepsBtn().click()
        this.validateTheUserIsOnTheCorrectPage(page)
    }
    createNewAccountWIthExistingEmaillAndValidate(email,text){
        this.getNewUAccountEmailInput().clear().type(email)
        this.getCreateNewAccountBtn().click().wait(2000)
        this.validateAnElementContainsText(this.pageElements.existingEmailAlert,text)
    }
    createNewAccountAndValidate(email){
        this.getNewUAccountEmailInput().clear().type(email)
        this.getCreateNewAccountBtn().click()
    }
    loginAndValidate(email,password,page){
        this.getExistingAccountEmailInput().type(email)
        this.getExistingAccountPasswordInput().type(password)
        this.getSignInBtn().click()
        this.validateTheUserIsOnTheCorrectPage(page)
    }
    checkTermsOfServiceAndValidate(){
        this.getCheckbox().click()
        this.validateAnElementIsChecked(this.pageElements.checkbox)
    }
    choosePaymentMethod(method,page){
        this.getPaymentMethod(method).click()
        this.validateTheUserIsOnTheCorrectPage(page)
    }
    
}