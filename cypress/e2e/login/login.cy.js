import LoginPage from "../pageobject/LoginPage"

describe('Login Page Case', () => {

  const login = new LoginPage;

  beforeEach(() => {
    login.navigate();
  });

  it('Login with wrong username/password', () => {
    login.enterUsername('something@something.com');
    login.enterPassword('somepassword');
    login.submit();
    cy.url().should('be.equal', 'https://app.laserhub.com/login')
  })

  // For the purpose of this task, username and password are mentioned in the lines below
  // Ideally, those should be hidden under a config file ignored by git or other means
  it('Login with proper username/password', () => {
    login.enterUsername('e.ioannidis+testing_worktask@laserhub.com');
    login.enterPassword('l0vet3sting@');
    login.submit();
    cy.url().should('not.be.equal', 'https://app.laserhub.com/login')
  })
})