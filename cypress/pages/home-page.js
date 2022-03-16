import HomePageElements from "../page-elements/home-page-elements";

export default class HomePage extends HomePageElements{

    conductSearch(param){
        cy.get(this.getSearchBar).type(`${param}{enter}`)
    }
    clickDressesLink(){
        cy.get(this.getDressesLink).click()
    }
}