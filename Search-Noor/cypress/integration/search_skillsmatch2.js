
    // check translation from Arabic to English
    describe('translation & Rating', () => {
        beforeEach(() => {
            cy.visit('https://skillsmatch.mdx.ac.uk/en/search/')
        })

        it('translation', () => {     
          cy.get('[id=username]').type('kev')
          cy.get('[id=password]').type('NnN82tpj9YR')
          cy.get('[value=Login]').click()
          // enter word in arabic then translate it to english
          cy.get('[class=tagify__input]').type('برمجيات {enter}')
          const button=cy.get("#searchFrom > div:nth-child(2) > div.input-group-append.col-2 > button");
          button.click();
          // choose english from the advance
          cy.get(".card-link").click({ force: true });
          cy.get("#translateInput").select("en");
          cy.get("[test-data=searchButton]").click({ force: true });
          cy.get("#search-result").click({ force: true });
          cy.get('[test-data=MatchedKeywords]').each((item) => {
              cy.wrap(item).should('contain.text', 'software')
            })
        })

        //check Sort based on user reviews
        it('rating', () => {  
            cy.get('[id=username]').type('kev')
            cy.get('[id=password]').type('NnN82tpj9YR')
            cy.get('[value=Login]').click()   
        //compare the rate by it length to the size to make sure it sorted from the highest rate
            cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > span").type("planning");
            cy.get(".card-link").click({ force: true });
            cy.get('[test-data=sort_by_user_reviews]').click({ force: true })
            cy.get('[test-data=searchButton]').click({ force: true })
            cy.get("#search-result").click({ force: true })

            cy.get(['#search-result > div:nth-child(2) > div.ratingme.smallRate'])
                .its('length')
                .then((size) => {
                    cy.get(['#search-result > div:nth-child(1) > div.ratingme.smallRate'])
                        .its('length')
                        .should('be.gte', size)
                })
        })
    })