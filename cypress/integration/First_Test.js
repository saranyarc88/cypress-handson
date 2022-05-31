describe('Browser Actions', () => {
    it('Should load correct URL', () => {
        cy.visit('https://books.toscrape.com/')
        cy.url().should('include', 'toscrape')
    })
    })