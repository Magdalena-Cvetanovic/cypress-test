///<reference types="cypress"/>

import AccountCreationElements from "../page-elements/account-creation-elements";
import { testData } from "../support/test-data";
import Validaitons from "../support/validations";

export default class AccountCreationPage extends Validaitons{
    pageElements = new AccountCreationElements
    
    getMrTitle(){
        return cy.get(this.pageElements.mrTitle)
    }
    getMrsTitle(){
        return cy.get(this.pageElements.mrsTitle)
    }
    getNameInput(){
        return cy.get(this.pageElements.nameInput)
    }
    getSurnameInput(){
        return cy.get(this.pageElements.surnameInput)
    }
    getPasswordInput(){
        return cy.get(this.pageElements.passwordInput)
    }
    getDaysSelect(){
        return cy.get(this.pageElements.daysSelect)
    }
    getMonthsSelect(){
        return cy.get(this.pageElements.monthsSelect)
    }
    getYearsSelect(){
        return cy.get(this.pageElements.yearsSelect)
    }
    getAddressInput(){
        return cy.get(this.pageElements.addressInput)
    }
    getCityInput(){
        return cy.get(this.pageElements.cityInput)
    }
    getStateSelect(){
        return cy.get(this.pageElements.stateSelect)
    }
    getPostCodeInput(){
        return cy.get(this.pageElements.postCodeInput)
    }
    getMobilePhoneInput(){
        return cy.get(this.pageElements.mobilePhoneInput)
    }
    getAliasInput(){
        return cy.get(this.pageElements.aliasInput)
    }
    getRegisterBtn(){
        return cy.get(this.pageElements.registerBtn)
    }
    chooseTitle(){
        if(testData.accountCreation.gender.includes('Male')){
            this.getMrTitle().click()
        }else if(testData.accountCreation.gender.includes('Female')){
            this.getMrsTitle().click()
        }else{
            cy.log('Selected title does not exist. Please enter male or female')
        }
    }
    enterName(){
        this.getNameInput().clear().type(testData.accountCreation.name)
    }
    enterSurname(){
        this.getSurnameInput().clear().type(testData.accountCreation.surname)
    }
    enterPassword(){
        this.getPasswordInput().clear().type(testData.accountCreation.password)
    }
    enterDateOfBirth(){
        this.getDaysSelect().select(testData.accountCreation.day)
        this.getMonthsSelect().select(testData.accountCreation.month)
        this.getYearsSelect().select(testData.accountCreation.year.toString())
    }
    enterAddress(){
        this.getAddressInput().clear().type(testData.accountCreation.address)
    }
    enterCity(){
        this.getCityInput().clear().type(testData.accountCreation.city)
    }
    chooseState(){
        this.getStateSelect().select(testData.accountCreation.state)
    }
    enterPostCode(){
        this.getPostCodeInput().clear().type(testData.accountCreation.postCode)
    }
    enterMobilePhone(){
        this.getMobilePhoneInput().clear().type(testData.accountCreation.phoneNumber)
    }
    enterAlias(){
        this.getAliasInput().clear().type(testData.accountCreation.alias)
    }
    clickRegister(){
        this.getRegisterBtn().click()
    }
    fillOutCreationForm(){
        this.chooseTitle()
        this.enterName()
        this.enterSurname()
        this.enterPassword()
        this.enterDateOfBirth()
        this.enterAddress()
        this.enterCity()
        this.chooseState()
        this.enterPostCode()
        this.enterMobilePhone()
        this.enterAlias()
        this.clickRegister()
    }

                        
}