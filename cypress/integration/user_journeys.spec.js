describe('User journeys', () => {

  afterEach(() => {
    cy.logout()
  })

  it('documentview_withsearch', () => {
    cy.fixture('users').then((user) => {
      cy.login(user.username1, user.password1)
    })

    cy.search('brexit')
    cy.get('#divSearchResults .active a').first().invoke('removeAttr', 'target').click()
    cy.get('#universal').should('contain','Lexis')
  })

  it('documentview_browse', () => {
    cy.fixture('users').then((user) => {
      cy.login(user.username2, user.password2)
    })

    cy.clickTopicOverlay()
    cy.get('#topicsList a').first().click({force: true})
    cy.get('#synopsis ul a').first().click()
  })

  it('documentview_citation', () => {
    cy.fixture('users').then((user) => {
      cy.login(user.username3, user.password3)
    })

    cy.search('brexit')
    cy.get('#divSearchResults .active a').first().invoke('removeAttr', 'target').click()
    cy.get('#document .remotelink').first().invoke('removeAttr', 'target').click()
  })

  it('document_emailed', () => {
    cy.fixture('users').then((user) => {
      cy.login(user.username5, user.password5)
    })

    cy.search('brexit')
    cy.get('#divSearchResults .active a').first().invoke('removeAttr', 'target').click()
    cy.get('#delivery a').eq(2).click()
    cy.get('#nav_share_email ul a').contains('Document only').click({force: true})

    cy.get('#docPageEmail_add').type('test@email.com')
    cy.get('#docPageEmail_from').type('test@email.com')
    cy.get('#nav_email').submit()
    cy.wait(10000)
  })

  it('bouncebackfromdocument_tosearchpage', () => {
    cy.fixture('users').then((user) => {
      cy.login(user.username6, user.password6)
    })

    cy.search('brexit')
    cy.get('#divSearchResults .active a').first().invoke('removeAttr', 'target').click()
    cy.go('back')
  })

  it('postfilter_doctype', () => {
    cy.fixture('users').then((user) => {
      cy.login(user.username7, user.password7)
    })

    cy.search('brexit')
    cy.get('#docClass .ng-binding').first().click()
  })

  it('postfilter_pa', () => {
    cy.fixture('users').then((user) => {
      cy.login(user.username8, user.password8)
    })

    cy.search('brexit')
    cy.get('#paFilter .ng-binding').first().click()
  })

  it('ondocument_interaction', () => {
    cy.fixture('users').then((user) => {
      cy.login(user.username9, user.password9)
    })

    cy.search('brexit')

    cy.get('#divSearchResults .active a').first().invoke('removeAttr', 'target').click()

    cy.get('#related .waiLinks').trigger('mouseover')

    cy.get('#changeTopic').click()
    cy.get('#topicsList > .closer').click()

    cy.get('#delivery .la-Email').click()
  })

  it('searches_prefiltered', () => {
    cy.fixture('users').then((user) => {
      cy.login(user.username10, user.password10)
    })

    cy.get('#openOptions').click()

    cy.get('#clearAll').click()

    cy.get('#srcOptions [type="checkbox"]').check(['Commercial', 'Corporate'])
    cy.search('commercial')
  })

  it('searches_total', () => {
    cy.fixture('users').then((user) => {
      cy.login(user.username11, user.password11)
    })

    cy.search('brexit')

    cy.get('#query').clear()
    cy.search('commercial')

    cy.get('#divSearchResults .active a').first().invoke('removeAttr', 'target').click()

    cy.get('#query').clear()
    cy.search('unfair dismissal')

    cy.get('#changeTopic').click()
    cy.get('#topicsList a').first().invoke('removeAttr', 'target').click({ force: true })

    cy.get('#query').clear()
    cy.search('food')

    cy.get('#profileChevron').click()
    cy.get('#mysettings').click({ force: true })

    cy.get('#query').clear()
    cy.search('advertising')

    cy.get('#query').clear()
  })

  it('searches_unfiltered', () => {
    cy.fixture('users').then((user) => {
      cy.login(user.username12, user.password12)
    })

    cy.get('#openOptions').click()
    cy.get('#clearAll').click()
    cy.get('#selAll').click()

    cy.search('brexit')
  })

  it('wordwheel_clicked', () => {
    cy.fixture('users').then((user) => {
      cy.login(user.username13, user.password13)
    })

    cy.get('#query').type('commerci')

    cy.get('#ui-id-1').find('.ui-menu-item:first').click()
    cy.wait(15000)
  })

  it('homepage_views', () => {
    cy.fixture('users').then((user) => {
      cy.login(user.username14, user.password14)
    })

    cy.search('brexit')

    cy.get('#divSearchResults .active a').first().invoke('removeAttr', 'target').click()

    cy.get('#lexisMenu').click()

    cy.get('#changeTopic').click()
    cy.get('#topicsList a').first().invoke('removeAttr', 'target').click({ force: true })

    cy.go('back')
  })

  it('landingpage_views', () => {
    cy.fixture('users').then((user) => {
      cy.login(user.username15, user.password15)
    })

    cy.get('#changeTopic').click()
    cy.get('#topicsList a').first().invoke('removeAttr', 'target').click({ force: true })

    cy.search('commercial')

    cy.get('#changeTopic').click()
    cy.get('#topicsList a').first().invoke('removeAttr', 'target').click({ force: true })

    cy.get('#synopsis .leftCol > :nth-child(1) > ul > :nth-child(1) > h3 > a').click()

    cy.get('#changeTopic').click()
    cy.get('#topicsList a').first().invoke('removeAttr', 'target').click({ force: true })
  })

  it('zero_results', () => {
    cy.fixture('users').then((user) => {
      cy.login(user.username16, user.password16)
    })

    cy.search('blah blah')
  })

  it('click_on_topic_overlay', () => {
    cy.fixture('users').then((user) => {
      cy.login(user.username18, user.password18)
    })

    cy.clickTopicOverlay()
    cy.clickTopicOverlay()

    cy.get('#query').type('brexit {enter}', {force: true})

    cy.clickTopicOverlay()
    cy.clickTopicOverlay()

    cy.get('#divSearchResults .active a').first().invoke('removeAttr', 'target').click()

    cy.clickTopicOverlay()
    cy.clickTopicOverlay()
  })

  // needs to be last for tests to finish
  it('email_alert', () => {
    cy.visit('./cypress/plugins/email_alert.html')
    cy.get('.c101 > span').click() // .c101 is the class name of first document link in the email.

    cy.fixture('users').as('user')

    cy.get('#userAccname').then((userAccname) => {
      if (userAccname[0].innerHTML.includes('Sign-in')) {
        cy.get('@user').then((user) => {
          cy.get('#signIn_id').type(user.username17)
          cy.get('#signIn_pass').type(user.password17 + '{enter}')
        })
      }
    })
  })
})
