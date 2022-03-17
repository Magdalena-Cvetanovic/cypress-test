///<reference types= "cypress"/>

export default class SearchResultPageElements{
    firstProduct = '.product_img_link'
    searchedTerm = '.lighter'
    listOfSearchResults = '.product_list>li'
    addToCompareBtn = '.add_to_compare'
    compareBtn = '.bt_compare_bottom'
    productsWithDiscount = []

    getFirstProduct(){
        return this.firstProduct
    }
    getListOfProducts(){
        return this.listOfSearchResults
    }
    getProductsWithDiscount(){
        return this.productsWithDiscount
    }
    getAddToCompareBtn(){
        return this.addToCompareBtn
    }
    getCompareBtn(){
        return this.compareBtn
    }
}