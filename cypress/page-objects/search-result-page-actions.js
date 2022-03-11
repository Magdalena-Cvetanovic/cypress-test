///<reference types= "cypress"/>

export function openFirstProduct(){
    cy.get('.product_img_link').click()
}
export function collectElementsWithDiscount(element, array){
    try {
        cy.get(element).each(($el) => {
            if($el.text().includes('-') && $el.text().includes('%')){
                array.push($el)
            }
        }).log(array.length)

    } catch (error) {
        error.log()
    }
}
export function hoverToProductAndClickAddToCompare(array){
    cy.get(array).each(($el) =>{
        cy.get($el).trigger('mouseover')
        cy.get($el).find('.add_to_compare').click().wait(4000)
    })
}
export function clickCompareBtn(){
    cy.get('.bt_compare_bottom').click()
}