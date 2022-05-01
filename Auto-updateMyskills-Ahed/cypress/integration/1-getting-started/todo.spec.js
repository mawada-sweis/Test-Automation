/// <reference types="cypress" />

describe('example skillsmatch app', () => {
  beforeEach(() => {
     // to visit app skills match
    cy.visit('https://skillsmatch.mdx.ac.uk/en/profile/update/skills')
  })

  it(' Check that the result shown on (star) matches the average on page containts', () => {
    
  //..... to log in accounts by user name and password 
    const username = 'ahed.hamad5'
    const password = '12345678'
    cy.get("input[name=username]").type(username);
    cy.get("input[name=password]").type(password).type("{enter}");
    
  //...... click first button to stat fill form 

    cy.get('[test-data=StartUpdatingMySkills]').click()

  //..... get first area (About DigCompEdu) and take first value found then click next step 
    cy.get('[test-data=area_1]')
    cy.get('input[test-data=answer_4]').first().check({force: true})
    cy.get(':nth-child(3) > .next').click()
 
  //..... Get the answer form and get the ----second area (professional engagement)----
  // Use siblings function to get all the answers on this page only
  // then use function check and function should to expected to check
  // then click next step 

    cy.get('#answerForm')
    cy.get('[test-data=area_2]').siblings('.form-check').find('[test-data= answer_1]').check({force: true}) .should('be.checked') 
    cy.get('[style="display: block; opacity: 1;"] > .next').click({force: true})

  //For each page in the form, the same steps were applied
  //...... third area (Digital Resources) in form......  

    cy.get('#answerForm')
    cy.get('[test-data=area_3]').siblings('.form-check').find('[test-data= answer_2]').check({force: true}) .should('be.checked') 
    cy.get('[style="display: block; opacity: 1;"] > .next').click({force: true})

  //...... fourth area(Teaching and Learning) in form......

    cy.get('#answerForm')
    cy.get('[test-data=area_4]').siblings('.form-check').find('[test-data= answer_4]').check({force: true}) .should('be.checked') 
    cy.get('[style="display: block; opacity: 1;"] > .next').click({force: true})

  //...... fifth area(Assessment) in form......

    cy.get('#answerForm')
    cy.get('[test-data=area_5]').siblings('.form-check').find('[test-data= answer_2]').check({force: true}) .should('be.checked') 
    cy.get('[style="display: block; opacity: 1;"] > .next').click({force: true})

  //...... sixth area(Empowering Learners) in form......

    cy.get('#answerForm')
    cy.get('[test-data=area_6]').siblings('.form-check').find('[test-data= answer_4]').check({force: true}) .should('be.checked') 
    cy.get('[style="display: block; opacity: 1;"] > .next').click({force: true})

  //...... seventh area(Facilitating Learners' Digital Competence) in form......

    cy.get('#answerForm')
    cy.get('[test-data=area_7]').siblings('.form-check').find('[test-data= answer_2]').check({force: true}) .should('be.checked') 
    cy.get('[style="display: block; opacity: 1;"] > .next').click({force: true})

  //...... eightth area(Finally) in form......
  //click confirm button 

    cy.get('#answerForm')
    cy.get('[test-data=area_8]').siblings('.form-check').find('[test-data= answer_3]').check({force: true}) .should('be.checked') 
    cy.get('[test-data=Confirm]').click({force: true})

  //---------- after check and test form----------
  //---then test contant page (star and rate)

  //----- First area (professional engagement) -----
  // the first take arae 1 scor (0/16) and siblit this rate to take for example nubmer 0 and number 16 
  // then combut the the scour shonwn on the star  related on two number then use function round to round the result 
  // get my scoure area and find the star tha has been fill then use function should 

  //For each area score in the contents page, the same steps were applied
    cy.get('[test-data=area_1_Scor]', { timeout: 2000 }).invoke('text')
     .then(text => {
 
     const FirstNumber = +text.split('/')[0].replace('(', '')
   
     const SecoundNumber = +text.split('/')[1].replace(')', '')
   
    const TheRate = FirstNumber * 5 / SecoundNumber;
   
    const result = Math.round(TheRate)
   
    cy.log(result);
  
   cy.get('[test-data=area_1_myscore]').find('[test-data=filledStar]').should('have.length', result)
 });
 
 //...... secound area (Digital Resources)......

 cy.get('[test-data=area_2_Scor]', { timeout: 2000 }).invoke('text')
 .then(text => {
 
  const FirstNumber = +text.split('/')[0].replace('(', '')

  const SecoundNumber = +text.split('/')[1].replace(')', '')

 const TheRate = ((FirstNumber * 5) / SecoundNumber).toFixed(3);

 const result = Math.round(TheRate)

 cy.log(result);

 cy.get('[test-data=area_2_myscore]').find('[test-data=filledStar]').should('have.length', result)
});

 //...... Third area(Teaching and Learning)...... 

cy.get('[test-data=area_3_Scor]', { timeout: 2000 }).invoke('text')
.then(text => {
 
  const FirstNumber = +text.split('/')[0].replace('(', '')

  const SecoundNumber = +text.split('/')[1].replace(')', '')

 const TheRate = FirstNumber * 5 / SecoundNumber;

 const result = Math.round(TheRate)

 cy.log(result);
 cy.get('[test-data=area_3_myscore]').find('[test-data=filledStar]').should('have.length', result)
});

 //...... fourth area(Assessment)...... 

cy.get('[test-data=area_4_Scor]', { timeout: 2000 }).invoke('text')
.then(text => {
 
  const FirstNumber = +text.split('/')[0].replace('(', '')

  const SecoundNumber = +text.split('/')[1].replace(')', '')

 const TheRate = FirstNumber * 5 / SecoundNumber;

 const result = Math.round(TheRate)

 cy.log(result);
 cy.get('[test-data=area_4_myscore]').find('[test-data=filledStar]').should('have.length', result)
});

//...... Fifth area(Empowering Learners)......

 cy.get('[test-data=area_5_Scor]', { timeout: 2000 }).invoke('text')
.then(text => {
 
  const FirstNumber = +text.split('/')[0].replace('(', '')

  const SecoundNumber = +text.split('/')[1].replace(')', '')

 const TheRate = FirstNumber * 5 / SecoundNumber;

 const result = Math.round(TheRate)

 cy.log(result);
 cy.get('[test-data=area_5_myscore]').find('[test-data=filledStar]').should('have.length', result)
});
 
//...... Sixth area(Facilitating Learners' Digital Competence)......

cy.get('[test-data=area_5_Scor]', { timeout: 2000 }).invoke('text')
.then(text => {
 
  const FirstNumber = +text.split('/')[0].replace('(', '')

  const SecoundNumber = +text.split('/')[1].replace(')', '')

 const TheRate = FirstNumber * 5 / SecoundNumber;

 const result = Math.round(TheRate)

 cy.log(result);
 cy.get('[test-data=area_5_myscore]').find('[test-data=filledStar]').should('have.length', result)
});


})
})
