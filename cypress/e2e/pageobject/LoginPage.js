class LoginPage {
    navigate() {
        cy.visit('https://app.laserhub.com/login');
        // Accept cookies if modal shows up
        cy.contains('button', 'Accept All Cookies').click()
        cy.reload()
    }

    enterUsername(username) {
        cy.get('[id=email]')
            .should('be.visible')
            .clear()
            .type(username);
        return this
    }

    enterPassword(password) {
        cy.get('[id=password]')
            .should('be.visible')
            .clear()
            .type(password);
        return this
    }

    submit() {
        cy.get('[type=submit]')
            .should('be.visible')
            .click()
    }
}
export default LoginPage