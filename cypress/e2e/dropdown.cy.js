describe("Dropdowns", ()=>{
    it('Title', ()=>{
        cy.visit('https://register.rediff.com/register/register.php')
        cy.wait(3000)

        cy.get('[width="200"] > input').type('Test User')
        cy.get('[valign="bottom"] > [type="text"]').type('12575521757')
        cy.get('#country').select('7')
        cy.xpath("//tbody/tr[22]/td[3]/select[1]").select('03')
        cy.wait(1000)

        cy.xpath('//tbody/tr[22]/td[3]/select[2]').select('APR')

        cy.xpath('//tbody/tr[22]/td[3]/select[3]').select('2009')

    })


})