///<reference types= "cypress"/>

import SearchResultPageElements from "../page-elements/search-result-page-elements";
import Validaitons from "../support/validations";

export default class SearchResultPage {
    elementPage = new SearchResultPageElements()
    validations = new Validaitons()
   
    openFirstProduct(){
        cy.get(this.elementPage.getFirstProduct()).click()
        this.validations.validateTheUrlHasChanged('id_product')
    }
    collectElementsWithDiscount(){
        cy.get(this.elementPage.getListOfProducts()).each(($el) => {
            if($el.text().includes('-') && $el.text().includes('%')){
                this.elementPage.getProductsWithDiscount().push($el)
            }
        })
    }
    hoverToProductAndClickAddToCompare(){
        cy.get(this.elementPage.getProductsWithDiscount()).each(($el) =>{
            cy.get($el).trigger('mouseover')
            cy.get($el).find(this.getCompareBtn()).click().wait(4000)
        })
    }
    clickCompareBtn(){
        cy.get(this.elementPage.getCompareBtn()).click()
    }


}