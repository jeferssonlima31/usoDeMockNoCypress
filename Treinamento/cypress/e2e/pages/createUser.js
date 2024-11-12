const { faker } = require('@faker-js/faker');

function navegation(){
    
    cy.visit('https://automationteststore.com/index.php?rt=account/create')
}

class user{

    userWithFaker(){

        navegation()

        cy.get('#AccountFrm_firstname').type(faker.person.firstName())
        cy.get('#AccountFrm_lastname').type(faker.person.lastName())
        cy.get('#AccountFrm_email').type(faker.internet.email())
        cy.get('#AccountFrm_telephone').type(faker.phone.number())
        cy.get('#AccountFrm_fax').type(faker.phone.number())
        cy.get('#AccountFrm_company').type(faker.company.name())
        cy.get('#AccountFrm_address_1').type(faker.location.streetAddress())
        cy.get('#AccountFrm_address_2').type(faker.location.streetAddress())
        cy.get('#AccountFrm_city').type(faker.location.city())
        cy.get('#AccountFrm_country_id').select('Brazil')
        cy.get('#AccountFrm_zone_id').select('Pernambuco')
        cy.get('#AccountFrm_postcode').type(faker.location.zipCode())
        
        cy.get('#AccountFrm_loginname').type(faker.person.firstName())
        cy.get('#AccountFrm_password').type('Snow@123')
        cy.get('#AccountFrm_confirm').type('Snow@123')
        cy.get('#AccountFrm_newsletter1').click()
        cy.get('#AccountFrm_agree').click()

        cy.get('.col-md-2 > .btn').click()


    }
    
}
export default new user();