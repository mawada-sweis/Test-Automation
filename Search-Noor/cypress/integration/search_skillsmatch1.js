describe('Search', () => {
  beforeEach(() => {  
    cy.visit('https://skillsmatch.mdx.ac.uk/en/search/')
  })

    it('with all key words', () => {     
      cy.get('[id=username]').type('kev')
      cy.get('[id=password]').type('NnN82tpj9YR')
      cy.get('[value=Login]').click()

      // enter two key words in the search bar
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
            cy.log(search1);
        })

      //get second word from search
      cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > tag:nth-child(2)")
        .invoke('text')
        .then(text=>{
            var search2=text
            cy.log(search2);
        }) 

        //compare the search word with result that it contains all the words from the seach
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