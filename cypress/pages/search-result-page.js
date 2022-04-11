///<reference types= "cypress"/>

import SearchResultPageElements from "../page-elements/search-result-page-elements";
import {
    testData
} from "../support/test-data";
import Validaitons from "../support/validations";

export default class SearchResultPage extends Validaitons {
    pageElements = new SearchResultPageElements()

    getFirstProduct() {
        return cy.get(this.pageElements.firstProduct)
    }
    getListOfProducts() {
        return cy.get(this.pageElements.listOfSearchResults)
    }
    getProductsWithDiscount() {
        return cy.get(this.pageElements.productsWithDiscount)
    }
    getAddToCompareBtn() {
        return cy.get(this.pageElements.addToCompareBtn)
    }
    getCompareBtn() {
        return cy.get(this.pageElements.compareBtn);
    }
    getSearchedTerm() {
        return this.pageElements.searchedTerm
    }
    getProductPrice() {
        return this.pageElements.productPrice
    }
    getProductName() {
        return this.pageElements.productName
    }
    getProductPrices(){
        return this.pageElements.productPrices
    }
    getLowestPrices(){
        this.pageElements.lowestProducts
    }
    validateCorrectTermIsSearched() {
        this.validateAnElementContainsText(this.getSearchedTerm(), testData.search.criteria)
    }
    openFirstProduct() {
        this.getProductNameAndPrice()
        this.getListOfProducts().find('a').eq(0).click()
    }
    getProductNameAndPrice() {
        this.getListOfProducts().each(($el) => {
            cy.get($el).find(this.getProductName()).invoke('attr', 'title').then((productName) => {
                cy.wrap(productName).as('productName')
            })
            cy.get($el).find(this.getProductPrice()).invoke('text').invoke('split', '$').its(1).
                invoke('split', '\t').its(0).
                then((productPrice) => {
                    cy.wrap(productPrice).as('productPrice')
                })
        })
    }
    //returns the value of the product and pushes it an array as a number
    findProductPrices() {
        this.getListOfProducts().each(($el) => {
            cy.get($el).find(this.getProductPrice()).invoke('text').
            invoke('split', '$').its(1).
            invoke('split','\t').its(0).
            then((productPrice)=>{
                this.getProductPrices().push(Number(productPrice))
            })
        })
        cy.wrap(this.getProductPrices()).as('listOfPrices')
    }
    //finds products with a discount
    collectElementsWithDiscount() {
        this.getListOfProducts().each(($el) => {
            if ($el.text().includes('-') && $el.text().includes('%')) {
                this.pageElements.productsWithDiscount.push($el)
            }
        })
    }
    //same as the method above, but with a slightly different logic 
    collectProductsWithDiscount(){
        this.getListOfProducts().each(($el)=>{
           cy.get($el).find('.content_price').first().then(($ele)=>{
               if($ele.text().includes('%')){
                this.pageElements.productsWithDiscount.push($el)
               }
           })
        })
    }
    hoverToProductAndClickAddToCompare() {
        this.getProductsWithDiscount().each(($el) => {
            cy.get(this.pageElements.compareBtn).find('strong').invoke('text').then((numberOfItems) => {
                cy.get($el).invoke('show');
                cy.get($el).find(this.pageElements.addToCompareBtn).click({force: true});
                this.getCompareBtn().should('be.enabled');
                cy.get(this.pageElements.compareBtn).find('strong').invoke('text').should('equal', `${(Number(numberOfItems) + 1)}`);
            })
        })
    }
    clickCompareBtn() {
        this.getCompareBtn().click()
    }
    chooseTwoDressesToCompareAndValidate() {
        // this.collectElementsWithDiscount()
        this.collectProductsWithDiscount()
        this.hoverToProductAndClickAddToCompare()
        this.validateAnElementContainsText(this.pageElements.compareBtn, 2)
        this.clickCompareBtn()
    }
    //goes through the array of prices and tries to find the lowest of the given number
    // findProductsLowerThan28Dollars(){
    //     cy.get('@listOfPrices').then((prices)=>{
    //         for (let i = 0; i < prices.length; i++) {
    //             cy.log(prices[i]<28)
    //             if(prices[i]<28){
    //                 this.pageElements.lowestProducts.push(prices[i])
    //             }
    //         }
    //     })
    //     cy.wrap(this.pageElements.lowestProducts).as('lowestPrices')
    // }
    //sorts the array and then pushes the first two values in a new array
    findLowestProducts(){
        cy.get('@listOfPrices').then((prices)=>{
            prices.sort()
            cy.log(prices)
            this.pageElements.lowestProducts.push(prices[0])
            this.pageElements.lowestProducts.push(prices[1])
        })
        cy.wrap(this.pageElements.lowestProducts).as('lowestProductPrices')
    }


}