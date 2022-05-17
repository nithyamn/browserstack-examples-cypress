import '@percy/cypress'

describe('Percy Test', function () {

  it('Localhost website - About us', () => {
    cy.visit('http://localhost:3000/');
    cy.percySnapshot('About Us Page'); 
  })

  it('Localhost website - Contact us', () => {
    cy.visit('http://localhost:3000/contact.html');
    cy.percySnapshot('Contact Us Page'); 
  })
});