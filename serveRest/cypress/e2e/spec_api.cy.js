beforeEach(() => {

  cy.login('henriquewn@gmail.com', '12345')
})


describe('feature de produtos spec', () => {

  it('fluxo 1 crud de produtos', () => {
    cy.visit('https://front.serverest.dev/admin/cadastrarprodutos')
    cy.get('[data-testid="nome"]').type('celular')
    cy.get('[data-testid="preco"]').type('2000')
    cy.get('[data-testid="descricao"]').type('Cadê meu celular?')
    cy.get('[data-testid="quantity"]').type('10')
    cy.get('[data-testid="cadastarProdutos"]').click()
    cy.get('h1').contains('Lista dos Produtos')
    cy.get('tbody').should('be.visible')
    cy.get('tr').each(($row) => {
      if ($row.find('td').eq(0).text() === 'celular') {
        $row.find('td').eq(5).children('div').children('.btn-danger').click()}
    })
    cy.get('td').should('not.include.text', 'celular')
  })


  it('fluxo 2 crud de produtos', () => {
    cy.productRegistration('tablet', 3000, 'produto importado', 10)
    cy.visit('https://front.serverest.dev/admin/listarprodutos')
    cy.get('h1').contains('Lista dos Produtos')
    cy.get('tbody').should('be.visible')
    cy.get('tr').each(($row) => {
      if ($row.find('td').eq(0).text() === 'tablet') {
        $row.find('td').eq(5).children('div').children('.btn-danger').click()}
    })
    cy.get('td').should('not.include.text', 'tablet')
    
  })

})