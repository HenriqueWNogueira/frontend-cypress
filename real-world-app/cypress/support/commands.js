Cypress.Commands.add('login', (username = 'testUserName', password = '1234') => {
  cy.visit('http://localhost:3000/signin');
  cy.get("input[name='username']").type(username);
  cy.get("input[name='password']").type(password);
  cy.get("button[type='submit']").click();
  cy.wait(5000);
 
});