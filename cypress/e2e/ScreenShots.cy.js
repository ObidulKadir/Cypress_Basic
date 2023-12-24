describe("Screenshot", () => {
    it('should navigate to Bluetooth Speaker category', () => {
        cy.viewport(1020, 780)
        cy.visit('https://www.daraz.com.bd/')

        // Hover over the first level category
        cy.get('.lzd-site-menu-root').screenshot()

    
    })
})
