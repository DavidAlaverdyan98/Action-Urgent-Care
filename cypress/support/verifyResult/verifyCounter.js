function verifyCounter(expectedCount = 10) {
    cy.get('[id = "app"]>h2').contains(expectedCount).should('be.visible');
}

export default { verifyCounter }