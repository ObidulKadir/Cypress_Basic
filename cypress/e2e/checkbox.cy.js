describe('My First Test', () => {
    it('Checkbox', () => {
      cy.visit("https://codenboxautomationlab.com/practice/");

      // checkbox xpath
      let option1_xpath = "//input[@id='checkBoxOption1']"
      let option2_xpath = "//input[@id='checkBoxOption2']"
      let option3_xpath = "//input[@id='checkBoxOption3']"

       //Value
       let option1_value = "option1"
       let option2_value = "option2"
       let option3_value = "option3"

       
      //single checkbox
      cy.xpath(option1_xpath).check()

      //uncheck checkbox
      cy.xpath(option1_xpath).uncheck()
     
    // single check with value 
    cy.xpath(option1_xpath).check().should('be.enabled').and('have.value', option1_value)
    cy.xpath(option2_xpath).check().should('be.enabled').and('have.value',option2_value)
    cy.xpath(option3_xpath).check().should('be.enabled').and('have.value', option3_value)

    // uncheck

    cy.xpath(option1_xpath).uncheck().should('not.be.checked').and('have.value', option1_value)
    cy.xpath(option2_xpath).uncheck().should('not.be.checked').and('have.value',option2_value)
    cy.xpath(option3_xpath).uncheck().should('not.be.checked').and('have.value', option3_value)
        
    cy.wait(2000)

    //muliple check
    cy.get('input[type=checkbox]').check([option1_value,option2_value])

    cy.wait(2000)
    //multiple uncheck
    cy.get('input[type=checkbox]').uncheck([option1_value,option2_value])

    checkBoxSelect(option1_xpath, 'check', option1_value)
  
    })
  })

  //custom function
  function checkBoxSelect(xpath, options, value){
    if(options.localeCompare("check")){
    cy.xpath(xpath).check().should('be.enabled').and('have.value', value)
    }
  }