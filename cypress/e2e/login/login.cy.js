import LoginPage from "../pageobject/LoginPage"

describe('Login Page Case', () => {

  const login = new LoginPage;

  beforeEach(() => {
    login.navigate();
  });

  it('Login with wrong username/password', () => {
    login.fillAndSendLoginInfo('something@something.com', 'somepassword');
    cy.url().should('be.equal', 'https://app.laserhub.com/login')
  })

  // For the purpose of this task, username and password are mentioned in the lines below
  // Ideally, those should be hidden under a config file ignored by git or other means
  it('Login with proper username/password', () => {
    login.fillAndSendLoginInfo('e.ioannidis+testing_worktask@laserhub.com', 'l0vet3sting@');
    cy.url().should('not.be.equal', 'https://app.laserhub.com/login')
  })
})