describe("Title verify", ()=>{
    it('Title', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)
        cy.title().should('eq', 'The Internet')
    })
})