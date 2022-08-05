import '@percy/cypress'

describe('Percy Test', function () {

  // it('Localhost website - About us', () => {
  //   var widthArray = [375, 768, 1280];
  //   cy.visit('http://localhost:3000/');
  //   //cy.percySnapshot('About Us Page', widths: [375, 768, 1280]); 
  //   cy.percySnapshot('About Us Page',{percyCSS: `.change-font{display: none;} .fixed-header{display: none;}`}); 
  // })

  it('Localhost website - Contact us', () => {
    cy.visit('https://ui-ang-showcase-app.devs.rnd.live.backbaseservices.com/#/ui-components/theme-v2/button');
    //cy.wait(5000)
    cy.percySnapshot('Backbase page'); 
  })
});

