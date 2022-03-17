export default class AddToCartModalElements{
    addedProductDetails ='#layer_cart_product_attributes'
    continueShoppingBtn = '.continue'
    proceedToCheckoutBtn = '[title="Proceed to checkout"]'

    getAddedProductDetails(){
        return this.addedProductDetails
    }
    getContinueShoppingBtn(){
        return this.continueShoppingBtn
    }
    getProceedToCheckoutBtn(){
        return this.proceedToCheckoutBtn
    }
}