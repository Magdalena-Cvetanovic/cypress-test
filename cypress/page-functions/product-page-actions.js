///<reference types= "cypress"/>

function clickSendToAFriendBtn(){
    return cy.get('#send_friend_button').click()
}
function enterFriendsName(name){
    return cy.get('#friend_name').type(name)
}
function enterFriendsEmail(email){
    return cy.get('#friend_email').type(email)
}
function clickSend(){
    return cy.get('#sendEmail').click()
}
export function clickOkToCloseModal(){
    cy.get('[value=OK]').click()
}
export function sendToAFriend(name,email){
    clickSendToAFriendBtn()
    enterFriendsName(name)
    enterFriendsEmail(email)
    clickSend()
}
export function chooseSize(size){
    cy.get('#group_1').select(size)
}
export function chooseColor(color){
    cy.get(`#color_to_pick_list [title=${color}]`).click()
}
export function clickAddToCart(){
    cy.get('#add_to_cart>button').click().wait(2000)
}
export function clickContinueShopping(){
    cy.get('.continue').click()
}
export function clickToProceedToCheckout(){
    cy.get('[title="Proceed to checkout"]').click()
}
export function getProductsToCompare(array,element,type){
    cy.get(element).each(($el)=>{
        if($el.text().includes('dress')){
            array.push($el)
            cy.log($el.text())
        }
    }).log(array.length)
}
export function addToCartBiggerDiscountDress(array, button){
    cy.get(array).each(($el)=>{
    if($el.text().includes('20')){
        cy.get($el).find(button).click()
    }
    })
}
