describe('Search', () => {
  beforeEach(() => {  
    cy.visit('https://skillsmatch.mdx.ac.uk/en/search/')
  })
    //log in by type these values in user name and password
    it('with all key words', () => {     
      cy.get('[id=username]').type('kev')
      cy.get('[id=password]').type('NnN82tpj9YR')
      cy.get('[value=Login]').click()

      // enter two key words in the search bar then open the advanced options, choose the "With all of the keywords" and press on search button
      cy.get('[class=tagify__input]').type('planning {enter}')
      cy.get('[class=tagify__input]').type('management{enter}')
      cy.get('[test-data=AdvancedOptions]').click()
      cy.get('[id=match_all]').click()
      const button=cy.get("#searchFrom > div:nth-child(2) > div.input-group-append.col-2 > button");
      button.click();

      //get first word from search
      cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > tag:nth-child(1)")
        .invoke('text')
        .then(text=>{
            var search1=text
            cy.log(search1); //Print a message to the Cypress Command Log that contains the first word in the search (work like return the value of it)
        })

      //get second word from search
      cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > tag:nth-child(2)")
        .invoke('text')
        .then(text=>{
            var search2=text
            cy.log(search2);//Print a message to the Cypress Command Log that contains the second word in the search (work like return the value of it)
        }) 

        //check that the result coursers have both of the key words in it by comparing the texts
        cy.get("#search-result > div:nth-child(1) > span:nth-child(4)")
        .should('have.text','\n            planning\n        ');
        cy.get("#search-result > div:nth-child(1) > span:nth-child(5)")
        .should('have.text','\n            management\n        ');
        cy.get("#search-result > div:nth-child(2) > span:nth-child(4)")
        .should('have.text','\n            planning\n        ');
        cy.get("#search-result > div:nth-child(2) > span:nth-child(5)")
        .should('have.text','\n            management\n        ');
        cy.get("#search-result > div:nth-child(3) > span:nth-child(4)")
        .should('have.text','\n            planning\n        ');
        cy.get("#search-result > div:nth-child(3) > span:nth-child(5)")
        .should('have.text','\n            management\n        ');
        cy.get("#search-result > div:nth-child(4) > span:nth-child(4)")
        .should('have.text','\n            planning\n        ');
        cy.get("#search-result > div:nth-child(4) > span:nth-child(5)")
        .should('have.text','\n            management\n        ');
        cy.get("#search-result > div:nth-child(5) > span:nth-child(4)")
        .should('have.text','\n            planning\n        ');
        cy.get("#search-result > div:nth-child(5) > span:nth-child(5)")
        .should('have.text','\n            management\n        ');
    })
})
