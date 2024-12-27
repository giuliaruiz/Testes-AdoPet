describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Giulia Ruiz')
    cy.get('[data-test="input-email"]').type('giulia.ruiz20@gmail.com')
    cy.get('[data-test="input-password"]').type('Senha2002')
    cy.get('[data-test="input-confirm-password"]').type('Senha2002')
    cy.get('[data-test="submit-button"]').click();
  })
})