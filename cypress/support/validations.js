///<reference types= "cypress"/>

export default class Validaitons{
  validateTheUrlHasChanged(param){
    cy.on("url:changed", (newUrl)=>{
        expect(newUrl).to.contain(param)
    })
}
  validateAnElementContainsText(element, text){
    cy.get(element).should('contain.text', text)
}
  validateAnElementIsVisible(element){
    cy.get(element).should('be.visible')
}
  validateAnElementIsNotVisible(element){
    cy.get(element).should('not.exist')
}
  validateAnElementIsChecked(element){
    cy.get(element).should('be.checked')
}
}