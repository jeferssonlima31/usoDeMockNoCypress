import { 
    randFirstName, randLastName, randEmail, randPhoneNumber, 
    randStreetAddress, randCity, randZipCode, randUserName, 
    randCompanyName 
} from '@ngneat/falso';

class UserCasual {
    navigateToCreateAccountPage() {
        cy.visit('https://automationteststore.com/index.php?rt=account/create');
    }

    fillField(selector, value) {
        cy.get(selector).type(value);
    }

    createUserWithNgneat() {
        this.navigateToCreateAccountPage();

        const userData = {
            firstName: randFirstName(),
            lastName: randLastName(),
            email: randEmail(),
            phone: randPhoneNumber(),
            company: randCompanyName(),
            address1: randStreetAddress(),
            address2: randStreetAddress(),
            city: randCity(),
            zipCode: randZipCode(),
            username: randUserName(),
            password: 'Snow@123',
        };

        this.fillField('#AccountFrm_firstname', userData.firstName);
        this.fillField('#AccountFrm_lastname', userData.lastName);
        this.fillField('#AccountFrm_email', userData.email);
        this.fillField('#AccountFrm_telephone', userData.phone);
        this.fillField('#AccountFrm_fax', userData.phone);
        this.fillField('#AccountFrm_company', userData.company);
        this.fillField('#AccountFrm_address_1', userData.address1);
        this.fillField('#AccountFrm_address_2', userData.address2);
        this.fillField('#AccountFrm_city', userData.city);

        cy.get('#AccountFrm_country_id').select('Brazil');
        cy.get('#AccountFrm_zone_id').should('be.visible').select('Pernambuco');

        this.fillField('#AccountFrm_postcode', userData.zipCode);
        this.fillField('#AccountFrm_loginname', userData.username);
        this.fillField('#AccountFrm_password', userData.password);
        this.fillField('#AccountFrm_confirm', userData.password);

        cy.get('#AccountFrm_newsletter1').check();
        cy.get('#AccountFrm_agree').check();

        cy.get('.col-md-2 > .btn').click();
    }
}

export default new UserCasual();
