import user  from "../pages/createUser"
describe('Validation Create User screen', () =>{
    it("Create user with faker.js",()=>{
  
        user.userWithFaker()
        cy.get('.maintext').should('contain','Your Account Has Been Created!')
        cy.url()
          .should('eq','https://automationteststore.com/index.php?rt=account/success')
    })

})    