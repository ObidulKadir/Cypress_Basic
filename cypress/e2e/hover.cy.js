describe("Hover on the element", () => {
    it('should navigate to Bluetooth Speaker category', () => {
        cy.visit('https://www.daraz.com.bd/')

        // Hover over the first level category
        cy.get('#Level_1_Category_No8 > a > .txt-holder').trigger('mouseover')

        // Wait for the submenu to appear and hover over 'Audio'
        cy.xpath("(//span[contains(text(),'Audio')])[5]").trigger('mouseover')

        // Wait for the submenu to appear and click on 'Bluetooth Speaker'
        cy.xpath("//ul[@class='lzd-site-menu-grand lzd-site-menu-grand-active']//span[contains(text(),'Bluetooth Speaker')]")
            .click({
                force:true
            })
    })
})
