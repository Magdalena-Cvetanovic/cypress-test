///<reference types= "cypress"/>
import HomePageElements from '../page-elements/home-page-elements'
import { testData } from '../support/test-data';
import Validaitons from '../support/validations';

export default class HomePage extends Validaitons{
    pageElements = new HomePageElements()

    getSearchBar() {
        return cy.get(this.pageElements.searchBar);
    }
    getDressesLink(){
        return cy.get(this.pageElements.dressesLink)
    }
    
    conductSearch(){
        this.getSearchBar().type(`${testData.search.criteria}{enter}`)
    }

    clickDressesLinkAndValidate(item){
        this.getDressesLink().click()
        this.validateTheUserIsOnTheCorrectPage(testData.pageNavigation.dressPage)
        this.validateTheCartHasItems(item)
    }

}