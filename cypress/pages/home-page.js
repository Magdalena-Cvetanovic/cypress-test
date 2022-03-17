///<reference types= "cypress"/>
import HomePageElements from '../page-elements/home-page-elements'
import Validaitons from '../support/validations'

export default class HomePage{
    pageElements = new HomePageElements()
    validations = new Validaitons()
    
    conductSearch(searchCriteria){
        cy.get(this.pageElements.getSearchBar()).type(`${searchCriteria}{enter}`)
        this.validations.validateTheUrlHasChanged(searchCriteria)
    }

    clickDressesLink(){
        cy.get(this.pageElements.clickDressesLink()).click()
    }
}