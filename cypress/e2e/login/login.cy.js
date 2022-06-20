import LoginPage from "../pageobject/LoginPage"

describe('Login Page Case', () => {

  const login = new LoginPage;

  beforeEach(() => {
    login.initialize();
    cy.intercept('POST', '/api/login').as('login');
  });

  it('Login with wrong username/password', () => {
    login.fillAndSendLoginInfo('something@something.com', 'somepassword');
    cy.wait('@login').its('response.statusCode').should('eq', 401);
  })

  // For the purpose of this task, username and password are mentioned in the lines below
  // Ideally, those should be hidden under a config file ignored by git or other means
  it('Login with proper username/password', () => {
    login.fillAndSendLoginInfo('e.ioannidis+testing_worktask@laserhub.com', 'l0vet3sting@');
    cy.wait('@login').then((interception) => {      
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.response.body).to.have.property('redirectURL', '/product');
    })
  })
})