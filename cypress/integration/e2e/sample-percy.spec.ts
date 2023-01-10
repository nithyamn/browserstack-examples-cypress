import '@percy/cypress'

describe('Percy Test', function () {

 it('Bynder - Login Page', () => {
    var widthArray = [375, 768, 1280];
    
    //cy.percySnapshot('About Us Page', widths: [375, 768, 1280]); 
    //cy.percySnapshot('About Us Page',{percyCSS: `.change-font{display: none;} .fixed-header{display: none;}`}); 
  })

  it('Bynder - Home Page', () => {
    cy.percySnapshot('Home Page');
  })
});

