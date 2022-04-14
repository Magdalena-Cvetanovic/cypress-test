///<reference types= "cypress"/>

export default class SearchResultPageElements{
    firstProduct = '.product_img_link'
    searchedTerm = '.lighter'
    listOfSearchResults = '.product_list>li'
    productName = '.left-block .product_img_link'
    productPrice = '.left-block .product-price'
    addToCompareBtn = '.add_to_compare'
    compareBtn = '.bt_compare_bottom'
    compareBtnNumber = 'strong'
    productsWithDiscount = []
    productPrices = []
    lowestProductsValue = []
    lowestProductsToCompare = []
}