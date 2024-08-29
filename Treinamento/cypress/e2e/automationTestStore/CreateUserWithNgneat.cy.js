import createUser3 from "../pages/createUser3"


describe('Validation Create User screen', () =>{
    it("Create user with ngneat",()=>{
  
        createUser3.createUserWithNgneat()
        cy.get('.maintext')
          .should('contain','Your Account Has Been Created!')
        cy.url()
          .should('eq','https://automationteststore.com/index.php?rt=account/success')
    })

})    