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
                cy.get($el).find(this.pageElements.addToCart).click().wait(2000)
            }
        })
    }
    addToCartProductAndValidate(){
        this.validateTheUrlHasChanged(testData.urlContents.productComparison)
        this.getProductsToCompare()
        this.addToCart20DiscountDress()
        this.validateTheUrlHasChanged(testData.urlContents.shoppingCart)
    }

    
}