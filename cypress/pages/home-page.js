///<reference types= "cypress"/>
import HomePageElements from '../page-elements/home-page-elements'
import Validaitons from '../support/validations';

export default class HomePage extends Validaitons{
    pageElements = new HomePageElements()

    getSearchBar() {
        return cy.get(this.pageElements.searchBar);
    }
    getDressesLink(){
        return cy.get(this.pageElements.dressesLink)
    }
    
    conductSearchAndValidate(searchCriteria){
        this.getSearchBar().type(`${searchCriteria}{enter}`)
        this.validateTheUrlHasChanged(searchCriteria)
    }

    clickDressesLinkAndValidate(item){
        this.getDressesLink().click()
        this.validateTheUserIsOnTheCorrectPage('Dresses')
        this.validateTheCartHasItems(item)
    }

}