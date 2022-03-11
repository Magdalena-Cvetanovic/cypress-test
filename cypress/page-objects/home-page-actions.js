///<reference types= "cypress"/>

export function conductSearch(param){
    cy.get('#search_query_top').type(param+'{enter}')
}

export function clickDresses(){
    cy.get('.sf-menu > :nth-child(2)> a').click()
}