describe('Orange HRM Tests', () => {
  it('Login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[placeholder="Username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('[type="submit"]').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-text--h6').contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[placeholder="Username"]').type('Admin')
    cy.get('[name="password"]').type('admin1234')
    cy.get('[type="submit"]').click()
    cy.get('[role="alert"]')
    
})
})

// pular teste -> colocar it.skip(....)