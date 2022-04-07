///<reference types= "cypress"/>

import SearchResultPageElements from "../page-elements/search-result-page-elements";
import { testData } from "../support/test-data";
import Validaitons from "../support/validations";

export default class SearchResultPage extends Validaitons {
    elementPage = new SearchResultPageElements()
   
    getFirstProduct(){
        return cy.get(this.elementPage.firstProduct)
    }
    getListOfProducts(){
        return cy.get(this.elementPage.listOfSearchResults)
    }
    getProductsWithDiscount(){
        return cy.get(this.elementPage.productsWithDiscount)
    }
    getAddToCompareBtn(){
        return cy.get(this.elementPage.addToCompareBtn)
    }
    getCompareBtn(){
        return cy.get(this.elementPage.compareBtn);
    }
    openFirstProductAndValidate(){
        this.getFirstProduct().eq(0).click()
        this.validateTheUrlHasChanged(testData.urlContents.product)
    }
    collectElementsWithDiscount(){
        this.getListOfProducts().each(($el) => {
            if($el.text().includes('-') && $el.text().includes('%')){
                this.elementPage.productsWithDiscount.push($el)
            }
        })
    }
    hoverToProductAndClickAddToCompare(){
        this.getProductsWithDiscount().each(($el) =>{
            cy.get(this.elementPage.compareBtn).find('strong').invoke('text').then((numberOfItems) => {
                cy.get($el).invoke('show');
                cy.get($el).find(this.elementPage.addToCompareBtn).click({force:true});
                this.getCompareBtn().should('be.enabled');
                cy.get(this.elementPage.compareBtn).find('strong').invoke('text').should('equal', `${(Number(numberOfItems) +1)}`);
            })
        })
    }
    clickCompareBtn(){
        this.getCompareBtn().click()
    }
    chooseTwoDressesToCompareAndValidate(){
        this.collectElementsWithDiscount()
        this.hoverToProductAndClickAddToCompare()
        this.validateAnElementContainsText(this.elementPage.compareBtn, 2)
        this.clickCompareBtn()
    }


}