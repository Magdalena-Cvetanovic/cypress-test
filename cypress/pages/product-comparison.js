///<reference types = "cypress"/>
import ProductComparisonElements from "../page-elements/product-comparison-elements";
import { testData } from "../support/test-data";
import Validaitons from "../support/validations";

export default class ProductComparisonPage extends Validaitons{
    pageElements = new ProductComparisonElements

    getTableProducts(){
        return cy.get(this.pageElements.tableProducts)
    }
    getProducts(){
        return cy.get(this.pageElements.products)
    }
    getProductsToCompare(){
        this.getTableProducts().each(($el)=>{
            if($el.text().includes('dress')){
                this.pageElements.products.push($el)
            }
        })
    }
    addToCart20DiscountDress(){
        this.getProducts().each(($el)=>{
            if($el.text().includes('20')){
                cy.get($el).find(this.pageElements.addToCart).click()
            }
        })
    }
    addToCartCheaperDress(){
        this.getProducts().each(($el)=>{
            cy.get('@lowestProductPrices').then((price)=>{
                cy.get($el).find('span.product-price').first().invoke('text').
                invoke('split', '$').its(1).then((productPrice)=>{
                    if(Number(productPrice)===price[0]){
                        cy.get($el).find(this.pageElements.addToCart).click()
                    }
                })
            })
        })
    }
    addToCartProductAndValidate(){
        this.validateTheUserIsOnTheCorrectPage(testData.pageNavigation.comparison)
        this.getProductsToCompare()
        this.addToCartCheaperDress()
    }

    
}