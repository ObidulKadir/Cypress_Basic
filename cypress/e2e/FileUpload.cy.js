describe('File upload in cypress', function () {
    before(function () {
        cy.visit('https://the-internet.herokuapp.com/upload')
    })

    it('File Upload using selectFile', () => {
        cy.wait(2000)
        cy.get('#file-upload').selectFile('cypress/fixtures/tesla.jpg')
        cy.wait(2000)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('tesla.jpg')
        cy.screenshot()
      })
})