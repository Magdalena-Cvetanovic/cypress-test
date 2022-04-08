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
    getSearchedTerm(){
        return this.elementPage.searchedTerm
    }
    getProductPrice(){
        return this.elementPage.productPrice
    }
    getProductName(){
        return this.elementPage.productName
    }
    validateCorrectTermIsSearched(){
        this.validateAnElementContainsText(this.getSearchedTerm(), testData.search.criteria)
    }
    openFirstProduct(){
        this.getProductNameAndPrice()
        this.getListOfProducts().find('a').eq(0).click()
    }
    getProductNameAndPrice(){
        this.getListOfProducts().each(($el)=>{
            cy.get($el).find(this.getProductName()).invoke('attr', 'title').then((productName)=>{
                cy.wrap(productName).as('productName')
            })
            cy.get($el).find(this.getProductPrice()).invoke('text').invoke('split', '$').its(1).
            invoke('split', '\t').its(0).
            then((productPrice)=>{
                cy.wrap(productPrice).as('productPrice')
            })
        })
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