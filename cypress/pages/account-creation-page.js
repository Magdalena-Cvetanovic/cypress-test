///<reference types="cypress"/>

import AccountCreationElements from "../page-elements/account-creation-elements";
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
    chooseTitle(title){
        if(title.toString().includes('male')){
            this.getMrTitle().click()
        }else if(title.toString().includes('female')){
            this.getMrsTitle().click()
        }else{
            cy.log('Selected title does not exist. Please enter male or female')
        }
    }
    enterName(name){
        this.getNameInput().clear().type(name)
    }
    enterSurname(surname){
        this.getSurnameInput().clear().type(surname)
    }
    enterPassword(password){
        this.getPasswordInput().clear().type(password)
    }
    enterDateOfBirth(day,month,year){
        this.getDaysSelect().select(day)
        this.getMonthsSelect().select(month)
        this.getYearsSelect().select(year)
    }
    enterAddress(address){
        this.getAddressInput().clear().type(address)
    }
    enterCity(city){
        this.getCityInput().clear().type(city)
    }
    chooseState(state){
        this.getStateSelect().select(state)
    }
    enterPostCode(postCode){
        this.getPostCodeInput().clear().type(postCode)
    }
    enterMobilePhone(mobilePhone){
        this.getMobilePhoneInput().clear().type(mobilePhone)
    }
    enterAlias(alias){
        this.getAliasInput().clear().type(alias)
    }
    clickRegister(){
        this.getRegisterBtn().click()
    }
    fillOutCreationForm(title,name,surname,password,day,month,year,address,city,state,postCode,phoneNumber,alias){
        this.chooseTitle(title)
        this.enterName(name)
        this.enterSurname(surname)
        this.enterPassword(password)
        this.enterDateOfBirth(day,month,year)
        this.enterAddress(address)
        this.enterCity(city)
        this.chooseState(state)
        this.enterPostCode(postCode)
        this.enterMobilePhone(phoneNumber)
        this.enterAlias(alias)
        this.clickRegister()
    }

                        
}