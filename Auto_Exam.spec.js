describe('Auto Exam', () => {

    it('Visits Health Insurance - Questions', () => {
      cy.visit('https://staging-finance.rabbitinternet.com/en/product/health-insurance/questions')
    })
  
    it('Select Product', () => {
      cy.get('label[for=product_category-ipdOpd]')
        .click()
      cy.contains('Which IPD/OPD plan do you want to be covered?')
        .should('be.visible')
    })
  
    it('Select Plan', () => {
      cy.get('label[for=product_ipdopd_subcategory-salaryMan]')
        .click()
      cy.contains('What is your phone number?')
        .should('be.visible')
    })
  
    it('Enter Phone number', () => {
      cy.get('input[name=customer_phone]')
        .should('be.visible')
        .type('0999999999')
    })
  
    it('Click Next', () => {
      cy.get("#customer_phone")
        .find('button[type=button]')
        .click()
      cy.contains('What is your first name?')
        .should('be.visible')            
    })
  
    it('Enter first name', () => {
      cy.get('input[name=customer_first_name]')
        .should('be.visible')
        .type('Binh')
    })
  
    it('Enter last name', () => {
      cy.get('input[name=customer_last_name]')
        .should('be.visible')
        .type('Nguyen')  
    })
  
    it('Click Next', () => {
      cy.get("#customer_first_name")
        .find('button[type=button]')
        .click()
      cy.contains('What is your email?')
        .should('be.visible')  
    })
  
    it('Enter Email', () => {
      cy.get('#email')
        .type('binh@gmail.com')
    })
  
    it('Click Next', () => {
      cy.get("#customer_email")
        .should('be.visible')
        .find('button[type=button]')
        .click()
      cy.contains('What is your gender?')
        .should('be.visible') 
    })
  
    it('Select Gender', () => {
      cy.get('[alt="M icon"]')
        .should('be.visible')
        .click()
      cy.contains('What is your date of birth?')
        .should('be.visible')  
    })
  
    it('Input DOB', () => {
      cy.get('input[name=customer_dob]')
        .should('be.visible')
        .type('27031989')
    })
  
    it('Click Next', () => {
      cy.get("#customer_dob")
        .should('be.visible')
        .find('button[type=button]')
        .click()

    })
  
    it('Click Consent', () => {
      cy.get('label[for=tc-1]')
        .should('be.visible')
        .click()
    })
  
    it('Click Show Quotes', () => {
      cy.get('#btn-marketing-consent')
        .should('be.visible')
        .click() 
    })

    it('Check Redirect to Quotes page', () => {
        cy.location('pathname')
          .should('eq', '/en/product/health-insurance/quotes') 
    })
  })
  