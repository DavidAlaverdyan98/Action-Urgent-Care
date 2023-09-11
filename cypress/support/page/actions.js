function increaseCounter(repeatCount = 1) {
    Cypress._.times(repeatCount, () => {
        cy.get('[id = "app"]>button').contains('+1').should('be.visible').click();
    });
}

function decreaseCounter(repeatCount = 1) {
    Cypress._.times(repeatCount, () => {
        cy.get('[id = "app"]>button').contains('-1').should('be.visible').click();
    });
}

function resetCounter() {
        cy.get('[id = "app"]>button').contains('Reset').should('be.visible').click();
}

export default { increaseCounter, decreaseCounter, resetCounter }