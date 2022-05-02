describe('titel search', () => {
    beforeEach(() => {
        cy.visit('https://skillsmatch.mdx.ac.uk/en/search/');
        cy.get('input[type="username"]').type('mawada_s8');
        cy.get('input[type="password"]').type('123');
        cy.get('input[type="submit"]').click();
    })

    it('search in title ', () => {
        cy.xpath('//*[@id="searchFrom"]/div[1]/div[2]/tags/span').type('python').type('{enter}');
        cy.xpath('//*[@id="searchFrom"]/div[2]/div[2]/div/div[1]/a').click();
        cy.xpath('//*[@id="collapseThree"]/div/div[1]/label').click();
        cy.xpath('//*[@id="collapseThree"]/div/div[3]/label').click();
        cy.xpath('//*[@id="searchFrom"]/div[1]/div[3]/button').click();
        cy.xpath('//*[@id="search-result"]/div[1]/div[1]/h4/a').should("contain.text", "Python");
    })
})