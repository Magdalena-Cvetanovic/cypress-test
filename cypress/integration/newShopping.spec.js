///<reference types= "cypress"/>

import { conductSearch } from "../page-objects/home-page-actions"
import HomePage from "../pages/home-page"

describe("Should test shopping flow", ()=>{
    const homePage = new HomePage()

    before(()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.clearCookies()
    })
    beforeEach(()=>{
        Cypress.Cookies.preserveOnce('PrestaShop-a30a9934ef476d11b6cc3c983616e364')
    })

    it('should conduct search', ()=>{
        conductSearch('shirt')
    })
})
