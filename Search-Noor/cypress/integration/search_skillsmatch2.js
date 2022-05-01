
    // check translation from Arabic to English
    describe('translation & Rating', () => {
        beforeEach(() => {
            cy.visit('https://skillsmatch.mdx.ac.uk/en/search/')
        })
//here it will check the transaltion from english to arabic that we select from the advance options
        it('translation', () => {    
            //log in by type these values in user name and password
          cy.get('[id=username]').type('kev') 
          cy.get('[id=password]').type('NnN82tpj9YR')
          cy.get('[value=Login]').click()
            
          // enter word in arabic in search then translate it to english by choose the translation option
          cy.get('[class=tagify__input]').type('برمجيات {enter}')
          const button=cy.get("#searchFrom > div:nth-child(2) > div.input-group-append.col-2 > button");
          button.click();//this will open the advance options
            
          // choose english from the advance then click on the search button
          cy.get(".card-link").click({ force: true });
          cy.get("#translateInput").select("en");
          cy.get("[test-data=searchButton]").click({ force: true });
          cy.get("#search-result").click({ force: true });
          // check that every course in the result contains the word translate correctly
          cy.get('[test-data=MatchedKeywords]').each((item) => {
              cy.wrap(item).should('contain.text', 'software')
            })
        })

        //check Sort based on user reviews
        it('rating', () => {  
            cy.get('[id=username]').type('kev')
            cy.get('[id=password]').type('NnN82tpj9YR')
            cy.get('[value=Login]').click()   
        //make sure that the rate for the course is sorted and have the right rate by comparing it Equal and Greater than
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
