///<reference types= "cypress"/>
export function validateTheUrlHasChanged(param){
    cy.on("url:changed", (newUrl)=>{
        expect(newUrl).to.contain(param)
    })
}
export function validateAnElementContainsText(element, text){
    cy.get(element).should('contain.text', text)
}
export function validateAnElementIsVisible(element){
    cy.get(element).should('be.visible')
}
export function validateAnElementIsNotVisible(element){
    cy.get(element).should('not.exist')
}