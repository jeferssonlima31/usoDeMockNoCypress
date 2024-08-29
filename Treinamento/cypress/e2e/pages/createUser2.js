const Chance = require('chance');
const chance = new Chance();

function navegation(){
    
    cy.visit('https://automationteststore.com/index.php?rt=account/create')
}

class user2tes{

    userWithChance(){
        navegation()
      
        cy.get('#AccountFrm_firstname').type(chance.first());
        cy.get('#AccountFrm_lastname').type(chance.last())
        cy.get('#AccountFrm_email').type(chance.email())
        cy.get('#AccountFrm_telephone').type(chance.phone())
        cy.get('#AccountFrm_fax').type(chance.phone())
        cy.get('#AccountFrm_company').type(chance.company())
        cy.get('#AccountFrm_address_1').type(chance.address())
        cy.get('#AccountFrm_address_2').type(chance.address())
        cy.get('#AccountFrm_city').type(chance.city())
        cy.get('#AccountFrm_country_id').select('Brazil')
        cy.wait(1000)
        cy.get('#AccountFrm_zone_id').select('Pernambuco')
        cy.get('#AccountFrm_postcode').type(chance.postcode())
        
        cy.get('#AccountFrm_loginname').type(chance.first())
        cy.get('#AccountFrm_password').type('Snow@123')
        cy.get('#AccountFrm_confirm').type('Snow@123')
        cy.get('#AccountFrm_newsletter1').click()
        cy.get('#AccountFrm_agree').click()

        cy.get('.col-md-2 > .btn').click()

    }

}
export default new user2tes()