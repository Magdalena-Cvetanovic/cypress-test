///<reference types = "cypress"/>

import CheckoutPageElements from "../page-elements/checkout-page-elements";
import { testData } from "../support/test-data";
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
    enterNewAccountEmail(){
        this.getNewUAccountEmailInput().clear().type(testData.existingAccount.username)
    }
    clickCreateNewAccount(){
        this.getCreateNewAccountBtn().click()
    }
    clickProceedToCheckoutSummaryAndValidate(page){
        this.getProceedToCheckoutSummaryBtn().click()
        this.validateTheUserIsOnTheCorrectPage(page)
    }
    clickProceedToCheckoutStepsAndValidate(page){
        this.getProceedToCheckoutStepsBtn().click()
        this.validateTheUserIsOnTheCorrectPage(page)
    }
    createNewAccountWIthExistingEmaillAndValidate(){
        this.enterNewAccountEmail()
        this.getCreateNewAccountBtn().click()
        this.validateAnElementContainsText(this.pageElements.existingEmailAlert, testData.errorMessages.existingAccount)
    }
    createNewAccountAndValidate(){
        this.getNewUAccountEmailInput().clear().type(testData.accountCreation.email)
        this.getCreateNewAccountBtn().click()
        this.validateTheUrlHasChanged(testData.urlContents.accountCreation)
    }
    loginAndValidate(page){
        this.getExistingAccountEmailInput().type(testData.existingAccount.username)
        this.getExistingAccountPasswordInput().type(testData.existingAccount.password)
        this.getSignInBtn().click()
        this.validateTheUserIsOnTheCorrectPage(page)
    }
    checkTermsOfServiceAndValidate(){
        this.getCheckbox().click()
        this.validateAnElementIsChecked(this.pageElements.checkbox)
    }
    choosePaymentMethod(page){
        this.getPaymentMethod(testData.paymentMethod.bank).click()
        this.validateTheUserIsOnTheCorrectPage(page)
    }
    
}