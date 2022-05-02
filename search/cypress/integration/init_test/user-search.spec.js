describe('user search', () => {
  beforeEach(() => {
    cy.visit('https://skillsmatch.mdx.ac.uk/en/search/');
    cy.get('input[type="username"]').type('mawada_s8');
    cy.get('input[type="password"]').type('123');
    cy.get('input[type="submit"]').click();
  })

  it('search ', () => {
    cy.xpath('//*[@id="searchFrom"]/div[1]/div[2]/tags/span').type('python').type('{enter}').type('ML').type('{enter}');
    cy.xpath('//*[@id="searchFrom"]/div[2]/div[2]/div/div[1]/a').click();
    cy.xpath('//*[@id="collapseThree"]/div/div[1]/label').click();
    cy.xpath('//*[@id="searchFrom"]/div[1]/div[3]/button').click();
    cy.xpath('//*[@id="search-result"]/div[1]/span[2]').should("contain.text", "python");
    cy.xpath('//*[@id="search-result"]/div[1]/span[3]').should("contain.text", "ml");
    cy.xpath('//*[@id="search-result"]/div[2]/span[2]').should("contain.text", "python");
    cy.xpath('//*[@id="search-result"]/div[2]/span[3]').should("contain.text", "ml");

  })
})