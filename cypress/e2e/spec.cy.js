describe('Uji halaman browser ini', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/cypress/e2e/index.html')
  })
})

describe('Uji tombol', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/cypress/e2e/index.html')
    cy.get('#nama').type('John Doe')
    cy.get('#submit').click()
  })
})