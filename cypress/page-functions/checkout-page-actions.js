///<reference types = "cypress"/>

export function createNewAccount(email){
    enterNewAccountEmail(email)
    clickSubmitBtn()
}
function enterNewAccountEmail(email){
    return cy.get('#email_create').clear().type(email)
}
function clickSubmitBtn(){
    return cy.get('#SubmitCreate').click().wait(4000)
}
export function signIn(email,password){
    enterYourEmail(email)
    enterPassword(password)
    clickSignIn()
}
function enterYourEmail(email){
    return cy.get('#email').type(email)
}
function enterPassword(password){
    return cy.get('#passwd').type(password)
}
function clickSignIn(){
    return cy.get('#SubmitLogin').click()
}
export function proceedToCheckout(){
    cy.get('.cart_navigation > .button ').click()
}