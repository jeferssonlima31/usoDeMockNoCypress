import createUser2 from "../pages/createUser2"

describe('Validation Create User screen', () =>{
    it("Create user with chance.js",()=>{
  
        createUser2.userWithChance()
        cy.get('.maintext')
          .should('contain','Your Account Has Been Created!')
        cy.url()
          .should('eq','https://automationteststore.com/index.php?rt=account/success')
    })

})    