describe('Página de Cadastro', () => {
    beforeEach( () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app');
      cy.get('[data-test="login-button"]').click();
      cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
        statusCode:400, }).as('stubPost')
      })
    
    it('Verifica Mensagem de falha no login', () => {
      cy.get('[data-test="submit-button"]').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible')
      cy.contains('Insira sua senha').should('be.visible')
    })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamnete', () => {
        cy.login('giulia.ruiz20@gmail.com', 'Senha2002')
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })

  })