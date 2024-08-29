import { randFirstName, randLastName, randEmail, randPhoneNumber, randStreetAddress,
         randCity, randZipCode, randUserName, randCompanyName } from '@ngneat/falso';

function navegation(){

    cy.visit('https://automationteststore.com/index.php?rt=account/create');
}
class UserCasual {
    createUserWithNgneat() {
        navegation();

        cy.get('#AccountFrm_firstname').type(randFirstName());
        cy.get('#AccountFrm_lastname').type(randLastName());
        cy.get('#AccountFrm_email').type(randEmail());
        cy.get('#AccountFrm_telephone').type(randPhoneNumber());
        cy.get('#AccountFrm_fax').type(randPhoneNumber());
        cy.get('#AccountFrm_company').type(randCompanyName());
        cy.get('#AccountFrm_address_1').type(randStreetAddress());
        cy.get('#AccountFrm_address_2').type(randStreetAddress());
        cy.get('#AccountFrm_city').type(randCity());
        cy.get('#AccountFrm_country_id').select('Brazil');
        cy.wait(1000);
        cy.get('#AccountFrm_zone_id').select('Pernambuco');
        cy.get('#AccountFrm_postcode').type(randZipCode());
        cy.get('#AccountFrm_loginname').type(randUserName());
        cy.get('#AccountFrm_password').type('Snow@123');
        cy.get('#AccountFrm_confirm').type('Snow@123');
        cy.get('#AccountFrm_newsletter1').click();
        cy.get('#AccountFrm_agree').click();

        cy.get('.col-md-2 > .btn').click();
    }
}

export default new UserCasual();
