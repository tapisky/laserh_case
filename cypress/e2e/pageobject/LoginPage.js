class LoginPage {
    initialize() {
        // Sets required cookies to skip modal and navigates to login page
        cy.setCookie('OptanonAlertBoxClosed', '2022-01-20T10:23:56.707Z');
        cy.visit('https://app.laserhub.com/login');
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

    fillAndSendLoginInfo(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.submit();
    }
}
export default LoginPage