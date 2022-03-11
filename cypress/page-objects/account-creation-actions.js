///<reference types= "cypress"/>

export function chooseTitle(title){
    if(title.toString().includes('male')){
        chooseMrTitle()
    }else if(title.toString().includes('female')){
        chooseMrsTitle()
    }else{
        cy.log('Chosen title does not exist. Please enter male or female.')
    }
}
export function fillOutCreationForm(title,name,surname,password,day,month,year,address,city,state,postCode,phoneNumber,alias){
    chooseTitle(title)
    enterName(name)
    enterSurname(surname)
    enterPassword(password)
    enterDateOfBirth(day,month,year)
    enterAddress(address)
    enterCity(city)
    chooseState(state)
    enterPostCode(postCode)
    enterMobilePhone(phoneNumber)
    enterAlias(alias)
    clickRegister()
}

function chooseMrTitle(){
    return cy.get('#id_gender1').click()
}
function chooseMrsTitle(){
    return cy.get('#id_gender2').click()
}
function enterName(name){
    return cy.get('#customer_firstname').type(name)
}
function enterSurname(surname){
    return cy.get('#customer_lastname').type(surname)
}
function enterPassword(password){
    return cy.get('#passwd').type(password)
}
function chooseDay(day){
    return cy.get('#days').select(day)
}
function chooseMonth(month){
    return cy.get('#months').select(month)
}
function chooseYear(year){
    return cy.get('#years').select(year)
}
function enterDateOfBirth(day,month,year){
    chooseDay(day)
    chooseMonth(month)
    chooseYear(year)
}
function enterAddress(address){
    return cy.get('#address1').type(address)
}
function enterCity(city){
    return cy.get('#city').type(city)
}
function chooseState(state){
    return cy.get('#id_state').select(state)
}
function enterPostCode(postCode){
    return cy.get('#postcode').type(postCode)
}
function enterMobilePhone(phoneNumber){
    return cy.get('#phone_mobile').type(phoneNumber)
}
function enterAlias(alias){
    return cy.get('#alias').clear().type(alias)
}
function clickRegister(){
    return cy.get('#submitAccount').click()
}