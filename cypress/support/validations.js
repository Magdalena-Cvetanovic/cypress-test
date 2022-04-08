///<reference types= "cypress"/>

export default class Validaitons{

  navitationText = '.breadcrumb'
  noOfCartItems ='a>.ajax_cart_quantity'

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
  validateAnElementIsSelected(element){
    cy.get(element).should('have.class', 'selected')
  }
  validateAnElementHasText(element, text){
    cy.get(element).should('have.text', text)
  }
  validateTheUserIsOnTheCorrectPage(text){
    cy.get(this.navitationText).should('contain.text', text)
  }
  validateTheCartHasItems(text){
    cy.get(this.noOfCartItems).should('has.text',text)
  }

  
}