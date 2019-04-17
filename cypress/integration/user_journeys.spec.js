describe('User journeys', () => {

  afterEach(() => {
    cy.logout()
  })

  it('documentview_withsearch', () => {
    // cy.fixture('users').then((user) => {
    //   cy.login(user.username1, user.password1)
    // })

    cy.login(Cypress.env('username_env1'), Cypress.env('password_env1'))

    cy.search('brexit')
    cy.get('#divSearchResults .active a').first().invoke('removeAttr', 'target').click()
    cy.get('#universal').should('contain','Lexis')
  })

  
})
